const { ethers, upgrades } = require("hardhat");

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const contracts = {
  pancakeRouter: "",
  pancakeFactory: "",
  multiSignature: "",
  multiSignatureToSToken: "",
  usdc: "",
  fish: "",
  fishOracle: "",
  sFish: "",
  dev: "",
  op: "",
  usdc_fish_lp: "",
  fishNft: "",
  usdcBuyNftLogic: "",
};

async function main() {
  const [deployer] = await ethers.getSigners();

  var now = Math.round(new Date() / 1000);
  contracts.dev = deployer.address;
  contracts.op = deployer.address;
  console.log("部署人", deployer.address);

  const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  const pancakeRouter = await PancakeRouter.attach(contracts.pancakeRouter);

  const PancakeFactory = await ethers.getContractFactory("PancakeFactory");
  const pancakeFactory = await PancakeFactory.attach(contracts.pancakeFactory);

  /**
   * 假USDC ERC20（实盘不要）
   */
  const USDCERC20 = await ethers.getContractFactory("FishERC20");
  if (contracts.usdc) {
    var usdc = USDCERC20.attach(contracts.usdc);
  } else {
    usdc = await upgrades.deployProxy(
      USDCERC20,
      ["USDC-test", "USDC-test", deployer.address, "100000000000000000000000"],
      { initializer: "initialize" }
    );
    await usdc.deployed();
    contracts.usdc = usdc.address;
    console.log("usdc:", usdc.address);
  }

  /**
   * FishToken
   */
  const FishERC20 = await ethers.getContractFactory("FishERC20");
  if (contracts.fish) {
    var fish = FishERC20.attach(contracts.fish);
  } else {
    fish = await upgrades.deployProxy(
      FishERC20,
      ["Fish Toen", "FISH", deployer.address, "1000000000000000000"],
      { initializer: "initialize" }
    );
    await fish.deployed();
    contracts.fish = fish.address;
    console.log("fish:", fish.address);
  }
  /**
   * 组流动性
   */
  await pancakeFactory.createPair(fish.address, usdc.address);
  await sleep(10000);
  var usdc_fish_lp = await pancakeFactory.getPair(fish.address, usdc.address);
  console.log("usdc_fish_lp address:", usdc_fish_lp.address);

  await usdc.approve(contracts.pancakeRouter, "10000000000000000000000");
  console.log("usdc.approve:");
  await fish.approve(contracts.pancakeRouter, "10000000000000000000000");
  console.log("fish.approve");

  /**
   * FishOracle
   */
  const FishOracle = await ethers.getContractFactory("FISHOracle");
  if (contracts.fishOracle) {
    var fishOracle = await FishOracle.attach(contracts.fishOracle);
  } else {
    fishOracle = await upgrades.deployProxy(
      FishOracle,
      [usdc_fish_lp, contracts.fish],
      { initializer: "initializer" }
    );
    await fishOracle.deployed();
  }
  contracts.fishOracle = fishOracle.address;
  console.log("fishOracle:", contracts.fishOracle);

  /**
   * sFISH
   */
  const SFISH = await ethers.getContractFactory("sFISH");
  if (contracts.sFish) {
    var sFish = SFISH.attach(contracts.sFish);
  } else {
    sFish = await SFISH.deploy(fish.address);
    //定价
    await fish.approve(SFISH.address, "1000000000000000000000000");
    console.log("fish.approve:sFISH");
    await fish.setExecutor(deployer.address, true);
    console.log("fish.setExecutor deployer.address");
    await fish.mint(deployer.address, "1000000000000000000");
    await sFish.mint("1000000000000000000");
    console.log("sFISH.mint");
  }
  contracts.sFish = sFish.address;
  console.log("sFISH:", contracts.sFish);

  /**
   * usdcBuyLogic
   */
  const UsdcBuyNftLogic = await ethers.getContractFactory("usdcBuyNftLogic");
  if (contracts.usdcBuyNftLogic) {
    var usdcBuyLogic = UsdcBuyNftLogic.attach(contracts.usdcBuyNftLogic);
  } else {
    usdcBuyLogic = await upgrades.deployProxy(
      UsdcBuyNftLogic,
      [
        contracts.fish,
        contracts.fishNft,
        contracts.pancakeFactory,
        contracts.pancakeRouter,
        contracts.multiSignature,
        contracts.multiSignatureToSToken,
        contracts.dev,
        contracts.op,
        contracts.sFish,
        contracts.fishOracle,
        contracts.usdc,
      ],
      { initializer: "initializer" }
    );
    await usdcBuyLogic.deployed();
  }
  contracts.usdcBuyNftLogic = usdcBuyLogic.address;
  console.log("usdcBuyNftLogic:", usdcBuyLogic.address);

  /**
   * 设置执行者
   */
  await fish.setExecutor(contracts.fishNft, true);
  console.log("fish.setExecutor");
  await fish.setExecutor(contracts.usdcBuyNftLogic, true);
  console.log("fish.setExcutor");
  await fishNft.setExecutor(contracts.usdcBuyNftLogic, true);
  console.log("fishNft.setExcutor");

  //测试买入
  await usdc.approve(contracts.usdcBuyNftLogic, "10000000000000000");
  console.log("usdc.approve:usdcBuyNftLogic");
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
