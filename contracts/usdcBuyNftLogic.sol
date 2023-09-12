// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@sushiswap/core/contracts/uniswapv2/interfaces/IUniswapV2Pair.sol";
import "@sushiswap/core/contracts/uniswapv2/interfaces/IUniswapV2Factory.sol";
import "@sushiswap/core/contracts/uniswapv2/interfaces/IUniswapV2Router02.sol";
import "./libraries/IOracle.sol";

library Math {
    function min(uint256 x, uint256 y) internal pure returns (uint256 z) {
        z = x < y ? x : y;
    }

    // babylonian method (https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
}

interface IFISH {
    function mint(address account_, uint256 amount_) external returns (bool);
}

interface IFISHNFT {
    function totalSupply() external view returns (uint256);

    function mintFromExecutor(
        address _to,
        uint256 _seed,
        uint256 _remainingReward
    ) external returns (bool);
}

contract usdcBuyNftLogic is Initializable, OwnableUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using SafeMath for uint256;

    // constructor(){}
    function initialize(
        IFISH _FISH,
        IFISHNFT _FISHNFT,
        IUniswapV2Factory _Factory,
        IUniswapV2Router02 _Router,
        address _multiSignature,
        address _multiSignatureToSToken,
        address _dev,
        address _op,
        address _sFISH,
        IOracle _oracle,
        IERC20Upgradeable _USDC
    ) external initializer {
        __Ownable_init();
        USDC = _USDC;
        oracle = _oracle;
        dev = _dev;
        op = _op;
        multiSignature = _multiSignature;
        multiSignatureToSToken = _multiSignatureToSToken;
        Router = _Router;
        Factory = _Factory;
        FISH = _FISH;
        FISHNFT = _FISHNFT;
        sFISH = _sFISH;
        PRECISION = 10000;
        ROI = 10000;
        direction = 0;
        stepSize = 100;
        TargetROI = 1000;
        price = 100 * 1e18;
        whitelistDiscount[0] = 10000;
        whitelistDiscount[1] = 9000;
        whitelistDiscount[2] = 8000;
        maxSellAmt = 1000;
        toLiquidityPec = 5000;
        toDevPec = 1500;
        toOpPec = 1500;
        addLiquidityOpen = false; //添加流动性开关
        stateOpen = false;
    }

    bool public addLiquidityOpen;
    uint256 public exchangeRate;
    IOracle public oracle;
    bytes public oracleData;
    address public sFISH;
    address public multiSignature; //多签地址
    address public multiSignatureToSToken;
    address public dev; //开发者地址
    address public op; //运营团队地址
    IUniswapV2Router02 public Router;
    IUniswapV2Factory public Factory;
    IERC20Upgradeable public USDC;
    uint256 public maxSellAmt; //最大销售数量
    IFISH public FISH;
    IFISHNFT public FISHNFT;
    uint256 public ROI;
    uint256 public PRECISION; //百分比分母
    uint256 public direction;
    uint256 public stepSize; //步长
    uint256 public TargetROI; //目标ROI
    uint256 public price; //买nft的价格
    mapping(address => uint256) public whitelistLevel;
    mapping(uint256 => uint256) public whitelistDiscount;
    uint256 public toLiquidityPec; //给流动性的份额，用于添加流动性
    uint256 public toDevPec; //开发的份额
    uint256 public toOpPec; //运营的份额
    bool public stateOpen; //状态开启，出现大问题可以通过这个来关闭

    function sortTokens(
        address tokenA,
        address tokenB
    ) internal pure returns (address token0, address token1) {
        require(tokenA != tokenB, "UniswapV2Library: IDENTICAL_ADDRESSES");
        (token0, token1) = tokenA < tokenB
            ? (tokenA, tokenB)
            : (tokenB, tokenA);
        require(token0 != address(0), "UniswapV2Library: ZERO_ADDRESS");
    }

    function updateRoi() internal returns (bool) {
        if (direction == 1) {
            if (ROI < TargetROI) {
                ROI = ROI.add(stepSize); //通过步长修改roi
            }
        } else if (direction == 2) {
            if (ROI > TargetROI) {
                ROI = ROI.sub(stepSize);
            }
        } else {}
        return true;
    }

    function setOracle(
        IOracle _newOracle,
        bytes memory _newOracleData
    ) public onlyOwner returns (bool) {
        oracle = _newOracle;
        oracleData = _newOracleData;
        return true;
    }

    //动态设置流动性的份额
    function setToLiquidityPec(
        uint256 _toLiquidityPec
    ) public onlyOwner returns (bool) {
        toLiquidityPec = _toLiquidityPec;
        return true;
    }

    //设置开发者份额
    function setToDevPec(uint256 _toDevPec) public onlyOwner returns (bool) {
        toDevPec = _toDevPec;
        return true;
    }

    //添加流动性开关
    function setAddLiquidityOpen(bool _bool) public onlyOwner returns (bool) {
        addLiquidityOpen = _bool;
        return true;
    }

    //动态调整运营份额
    function setToOpPec(uint256 _toOpPec) public onlyOwner returns (bool) {
        toOpPec = _toOpPec;
        return true;
    }

    //动态调整开发者团队
    function setDev(address _dev) public onlyOwner returns (bool) {
        dev = _dev;
        return true;
    }

    //动态调整运营团队
    function setOp(address _op) public onlyOwner returns (bool) {
        op = _op;
        return true;
    }

    //设置多签
    function setMultiSignature(
        address _multiSignature
    ) public onlyOwner returns (bool) {
        multiSignature = _multiSignature;
        return true;
    }

    function setMultiSignatureToSToken(
        address _multiSignatureToSToken
    ) public onlyOwner returns (bool) {
        multiSignatureToSToken = _multiSignatureToSToken;
        return true;
    }

    function setStateOpen(bool _bool) public onlyOwner returns (bool) {
        stateOpen = _bool;
        return true;
    }

    function setMaxSellAmt(uint256 _val) public onlyOwner returns (bool) {
        maxSellAmt = _val;
        return true;
    }

    function setROI(uint256 _val) public onlyOwner returns (bool) {
        ROI = _val;
        return true;
    }

    function setDirection(uint256 _val) public onlyOwner returns (bool) {
        direction = _val;
        return true;
    }

    //动态设置步长
    function setStepSize(uint256 _val) public onlyOwner returns (bool) {
        stepSize = _val;
        return true;
    }

    function setTargetROI(uint256 _val) public onlyOwner returns (bool) {
        TargetROI = _val;
        return true;
    }

    function setPrice(uint256 _val) public onlyOwner returns (bool) {
        price = _val;
        return true;
    }

    //动态设置白名单等级
    function setWhitelistLevel(
        address _user,
        uint256 _lev
    ) public onlyOwner returns (bool) {
        whitelistLevel[_user] = _lev;
        return true;
    }

    //动态设置白名单折扣
    function setWhitelistDiscount(
        uint256 _val,
        uint256 _lev
    ) public onlyOwner returns (bool) {
        whitelistDiscount[_val] = _lev;
        return true;
    }

    //每一次动作都要使用预言机进行一次更新操作
    function updateExchangeRate() public returns (bool updated, uint256 rate) {
        (updated, rate) = oracle.get(oracleData);
        if (updated) {
            exchangeRate = rate;
        } else {
            // Return the old rate if fetching wasn't successful
            rate = exchangeRate;
        }
    }

    function peekSpot() public view returns (uint256) {
        return oracle.peekSpot("0x");
    }

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) internal pure returns (uint256 amountOut) {
        uint256 amountInWithFee = amountIn.mul(997);
        uint256 numerator = amountInWithFee.mul(reserveOut);
        uint256 denominator = reserveIn.mul(1000).add(amountInWithFee);
        amountOut = numerator / denominator;
    }

    function buyNft(uint256 _amt) public returns (bool) {
        uint256 amt = _amt; //数量
        require(tx.origin == _msgSender(), "Only EOA"); //防止外部合约调用的方法，只能由个人钱包来调用
        //计算要花多少usdc
        uint256 amount = price
            .mul(amt)
            .mul(whitelistDiscount[whitelistLevel[msg.sender]])
            .div(PRECISION);
        //调用人发起转账，向本合约转amount数量的usdc
        IERC20Upgradeable(address(USDC)).safeTransferFrom(
            msg.sender,
            address(this),
            amount
        );
        uint256 amountUSDCToLiquidity = amount.mul(toLiquidityPec).div(
            PRECISION
        );
        //计算各个团队的份额
        uint256 amountUSDCToDev = amount.mul(toDevPec).div(PRECISION);
        uint256 amountUSDCToOP = amount.mul(toOpPec).div(PRECISION);
        uint256 amountUSDCToSFISH = amount
            .sub(amountUSDCToLiquidity)
            .sub(amountUSDCToDev)
            .sub(amountUSDCToOP);

        //通过工厂合约获得代币对合约的地址
        address pairAddress = Factory.getPair(address(USDC), address(FISH));
        // (uint256 reserve0, uint256 reserve1, ) = IUniswapV2Pair(pairAddress)
        //     .getReserves();
        (address token0, ) = sortTokens(address(USDC), address(FISH));

        //拿一部分钱去买fish币，当fish和usdc成对了才能去添加流动性

        if (addLiquidityOpen) {
            //usdc授权给路由合约，授权两次一次额度为0一次额度为最大（safeApprove必须先归0）
            IERC20Upgradeable(address(USDC)).safeApprove(address(Router), 0);
            IERC20Upgradeable(address(USDC)).safeApprove(
                address(Router),
                type(uint256).max
            );
            //fish授权给路由合约，授权两次一次额度为0一次额度为最大（safeApprove必须先归0）
            IERC20Upgradeable(address(FISH)).safeApprove(address(Router), 0);
            IERC20Upgradeable(address(FISH)).safeApprove(
                address(Router),
                type(uint256).max
            );

            //把usdc劈成一半买fish
            calAndSwap(
                IUniswapV2Pair(pairAddress),
                address(FISH),
                address(USDC),
                amountUSDCToLiquidity
            );

            //添加流动性的usdc
            uint256 addLiquidityForUSDC = IERC20Upgradeable(address(USDC))
                .balanceOf(address(this))
                .sub(amountUSDCToDev)
                .sub(amountUSDCToOP)
                .sub(amountUSDCToSFISH);
            Router.addLiquidity(
                address(USDC),
                address(FISH),
                addLiquidityForUSDC,
                IERC20Upgradeable(address(FISH)).balanceOf(address(this)), //fish的数量，之前买的所有fish
                0,
                0,
                multiSignature, //LP去往的多签地址
                block.timestamp + 1000
            );
        } else {
            USDC.safeTransfer(address(multiSignature), amountUSDCToLiquidity);
        }

        USDC.safeTransfer(address(dev), amountUSDCToDev); //转给开发团队
        USDC.safeTransfer(address(op), amountUSDCToOP); //转给运营团队

        if (stateOpen) {
            (uint256 reserve0, uint256 reserve1, ) = IUniswapV2Pair(pairAddress)
                .getReserves(); //获得两个代币的储备量，比值和数量比一样

            //判断fish代表0还是1
            (reserve0, reserve1) = address(USDC) == token0
                ? (reserve0, reserve1)
                : (reserve1, reserve0);
            uint256 amountFish = getAmountOut(
                amountUSDCToSFISH,
                reserve0,
                reserve1
            );
            (uint256 amount0Out, uint256 amount1Out) = address(USDC) == token0
                ? (uint256(0), amountFish)
                : (amountFish, uint256(0));
            USDC.safeTransfer(address(pairAddress), amountUSDCToSFISH);
            IUniswapV2Pair(pairAddress).swap(
                amount0Out,
                amount1Out,
                address(this),
                new bytes(0)
            );
            IERC20Upgradeable(address(FISH)).safeTransfer(
                address(sFISH),
                IERC20Upgradeable(address(FISH)).balanceOf(address(this))
            );
        } else {
            USDC.safeTransfer(
                address(multiSignatureToSToken),
                amountUSDCToSFISH
            );
        }

        //更新fish的价格，更新ROI
        (, uint256 rate) = updateExchangeRate();
        updateRoi();
        for (uint256 i = 0; i < amt; i++) {
            FISHNFT.mintFromExecutor(
                msg.sender,
                block.timestamp + i,
                (((price * rate) / 1e18) * (ROI + PRECISION)) / PRECISION //可获得的奖励
            );
        }
        return true;
    }

    /// Compute amount and swap between borrowToken and tokenRelative.
    function calAndSwap(
        IUniswapV2Pair lpToken,
        address tokenA,
        address tokenB,
        uint256 amountUSDCToLiquidity
    ) internal {
        (uint256 token0Reserve, uint256 token1Reserve, ) = lpToken
            .getReserves();
        (uint256 debtReserve, uint256 relativeReserve) = address(FISH) ==
            lpToken.token0()
            ? (token0Reserve, token1Reserve)
            : (token1Reserve, token0Reserve);
        (uint256 swapAmt, bool isReversed) = optimalDeposit(
            0,
            amountUSDCToLiquidity,
            debtReserve,
            relativeReserve
        );

        if (swapAmt > 0) {
            address[] memory path = new address[](2);
            (path[0], path[1]) = isReversed
                ? (tokenB, tokenA)
                : (tokenA, tokenB);
            Router.swapExactTokensForTokens(
                swapAmt,
                0,
                path,
                address(this),
                block.timestamp
            );
        }
    }

    function optimalDeposit(
        uint256 amtA,
        uint256 amtB,
        uint256 resA,
        uint256 resB
    ) internal pure returns (uint256 swapAmt, bool isReversed) {
        if (amtA.mul(resB) >= amtB.mul(resA)) {
            swapAmt = _optimalDepositA(amtA, amtB, resA, resB);
            isReversed = false;
        } else {
            swapAmt = _optimalDepositA(amtB, amtA, resB, resA);
            isReversed = true;
        }
    }

    function _optimalDepositA(
        uint256 amtA,
        uint256 amtB,
        uint256 resA,
        uint256 resB
    ) internal pure returns (uint256) {
        require(amtA.mul(resB) >= amtB.mul(resA), "Reversed");

        uint256 a = 997;
        uint256 b = uint256(1997).mul(resA);
        uint256 _c = (amtA.mul(resB)).sub(amtB.mul(resA));
        uint256 c = _c.mul(1000).div(amtB.add(resB)).mul(resA);

        uint256 d = a.mul(c).mul(4);
        uint256 e = Math.sqrt(b.mul(b).add(d));

        uint256 numerator = e.sub(b);
        uint256 denominator = a.mul(2);

        return numerator.div(denominator);
    }
}
