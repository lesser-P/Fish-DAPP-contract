const { ethers, upgrades } = require("hardhat");


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// const contracts = {// bsc

// }

// const contracts = {// fuji
//     pancakeRouter: '0xFBcdfe90e9c08Aa91BF6B1F83F5b4F50AB623412',
//     pancakeFactory: '0x24AE94200a6a82B1E3687EeE560aDbe55E0eF704',
//     signer: '0xD6fd44af1F385a25FFC291e476b82F95228dfD19',
//     usdc: '0x9F7f33dC7C0a49E3dCc54399a734BB64AF2427f5',
//     usc: '0xE5edF89799f8d5c7ea8BfdD3841341A1fAC8249B',
//     sea: '0x9A8DE29a8B21bDc9A3b5B4185D87d65B415B1bB1',
//     ssea: '0xBa1f119D1E16EbEC089CF53681b5ccBC502480b7',
//     usdc_usc_lp: '0xDE7aBADfE99cAf4Ac5b7B428291D1378347CeB74',
//     sea_usc_lp: '0xE94C9F31c70115b2F238895A8E694Fe139515865',
//     oracle: '0xfD2f3Df42fF384439412d1c5543A879882a8F332',
//     farm: '0x336291C9604e85043F0778Bac1d30e88f91059Ef',
//     stabilizer: '0xC542f7184366C29dfebd60F79beAA8C4f60C8E8f',
//     mirrorseaMain: '0xeb116eBf488AC9f3A266af71d9bff65FbE073e28',
//     helperLogic: '0xe3981A585DE4357031Cab3951b658119342b2E39',
//     dev: '0xD6fd44af1F385a25FFC291e476b82F95228dfD19',
//     op: '0xD6fd44af1F385a25FFC291e476b82F95228dfD19'
// }

const contracts = {// polygon 2
    adminProxy: '0xD7F1221117828E9897d0D6Fc2883B21f3DC8123c',
    pancakeRouter: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    pancakeFactory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    signer: '0xD6fd44af1F385a25FFC291e476b82F95228dfD19',
    usdc: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    usc: '0xD161b3bbD3a7550D9486Da8ce6e1F2FC4A409CB6',
    sea: '0x6e98923790F0ADB36338aCa0844805b3CC9fe06C',
    ssea: '0x1065dD3EAD3B0fA5Ceff5a2BDF520a6B4bEbD0A1',
    usdc_usc_lp: '0x7a2033613F9C821Cac8B71F3a8E6960Bc8A275A1',
    sea_usc_lp: '0xDb78541ff4F6Db0e4ba9195144B8475d87d69824',
    oracle: '0x9c85420dE58B60EDA7b5E025c8E7986C880Da0Ea',
    farm: '0x2C9E05CE89a07c142B56BbFe3cf1afAa12d33E9B',
    stabilizer: '0xB5FdA7b5cD50a9cE0Fd6EB1355110520c11028DD',
    mirrorseaMain: '0x462aa5Df11004328F2cef26EeB52D2ac1d03ac83',
    helperLogic: '0x99f5ce275Db0425aAd2B0F1F35B2F6074db6DeD8',
    dev: '0xBf96D99a3cfb08A78C67440D7eFEE5e9426F0406',//https://gnosis-safe.io/
    op: '0x72938e3D1741c6a99eFc7D2CBF1f0D0B4753a6b9'
}


async function main() {
    const [deployer] = await ethers.getSigners();

    var now = Math.round(new Date() / 1000);
    console.log('部署人：', deployer.address);

    const PancakeRouter = await ethers.getContractFactory('PancakeRouter');
    const pancakeRouter = PancakeRouter.attach(contracts.pancakeRouter);
    const PancakeFactory = await ethers.getContractFactory('PancakeFactory');
    const pancakeFactory = PancakeFactory.attach(contracts.pancakeFactory);

    /**
     * 假USDC ERC20 (实盘不需要)
     */
    const USDCERC20 = await ethers.getContractFactory('uscERC20');
    if (contracts.usdc) {
        var usdc = USDCERC20.attach(contracts.usdc);
    } else {
        usdc = await upgrades.deployProxy(USDCERC20, ['USDC-test', 'USDC-test', deployer.address, '10000000000000000000000'], { initializer: 'initialize' }); //1w USC 做盘用
        await usdc.deployed();
    }
    contracts.usdc = usdc.address;
    console.log("usdc:", contracts.usdc);


    /**
     * usc
     */
    const USCERC20 = await ethers.getContractFactory('uscERC20');
    if (contracts.usc) {
        var usc = USCERC20.attach(contracts.usc);
    } else {
        usc = await upgrades.deployProxy(USCERC20, ['USC', 'USC', deployer.address, '0'], { initializer: 'initialize' }); //11万
        await usc.deployed();
    }
    contracts.usc = usc.address;
    console.log("usc:", contracts.usc);

    /**
     * sea
     */
    const seaERC20 = await ethers.getContractFactory('seaERC20');
    if (contracts.sea) {
        var sea = seaERC20.attach(contracts.sea);
    } else {
        sea = await upgrades.deployProxy(seaERC20, ['SEA', 'SEA', deployer.address, '0'], { initializer: 'initialize' });
        await sea.deployed();
    }
    contracts.sea = sea.address;
    console.log("sea:", contracts.sea);

    /**
     * ssea
     */
    const SSEAERC20 = await ethers.getContractFactory('sSeaERC20');
    if (contracts.ssea) {
        var ssea = SSEAERC20.attach(contracts.ssea);
    } else {
        ssea = await SSEAERC20.deploy(contracts.sea);
        //定价
        await sea.approve(ssea.address, '1000000000000000000000000000000'); console.log("sea.approve:ssea");
        await sea.setExecutor(deployer.address, true); console.log("sea.setExecutor deployer.address");
        await sea.mint(deployer.address, '1000000000000000000');
        await ssea.mint('1000000000000000000'); console.log("ssea.mint");
    }
    contracts.ssea = ssea.address;
    console.log("ssea:", contracts.ssea);

    /**
     * usdc_usc组流动性 
     */
    if (!contracts.usdc_usc_lp) {
        await pancakeFactory.createPair(usc.address, usdc.address);
        await sleep(10000);
        var usdc_usc_lp_address = await pancakeFactory.getPair(contracts.usdc, contracts.usc); await sleep(1000);
        console.log("usdc_usc_lp_address:", usdc_usc_lp_address);
        contracts.usdc_usc_lp = usdc_usc_lp_address;
        await usdc.approve(contracts.pancakeRouter, '1000000000000000000000000000000'); console.log("usdc.approve:"); await sleep(1000);
        await usc.approve(contracts.pancakeRouter, '1000000000000000000000000000000'); console.log("usc .approve:"); await sleep(1000);
        /* await usdc.mint(deployer.address, '1000000000000000000000');*/
        await usc.setExecutor(deployer.address, true); console.log("usc.setExecutor deployer.address");
        await usc.mint(deployer.address, '1000000000000000000'); await sleep(1000);
        await pancakeRouter.addLiquidity(
            usc.address,
            usdc.address,
            '1000000000000000000',//1 usdc
            '1000000000000000000',//1 usc
            0,
            0,
            deployer.address,
            Math.round(new Date() / 1000) + 1000
        ); await sleep(1000);
        console.log("addLiquidity");
    }




    /**
     * sea_usc组流动性 
     */
    if (!contracts.sea_usc_lp) {
        await pancakeFactory.createPair(usc.address, sea.address);
        await sleep(10000);
        var sea_usc_lp_address = await pancakeFactory.getPair(contracts.sea, contracts.usc); await sleep(1000);
        console.log("sea_usc_lp_address:", sea_usc_lp_address);
        contracts.sea_usc_lp = sea_usc_lp_address;
        await sea.approve(contracts.pancakeRouter, '1000000000000000000000000000000'); console.log("sea.approve:"); await sleep(1000);
        await usc.approve(contracts.pancakeRouter, '1000000000000000000000000000000'); console.log("usc.approve:"); await sleep(1000);
        await sea.mint(deployer.address, '100000000000000000000000'); console.log("sea.mint"); await sleep(1000);
        await usc.mint(deployer.address, '100000000000000000000000'); console.log("usc.mint"); await sleep(1000);
        await pancakeRouter.addLiquidity(
            usc.address,
            sea.address,
            '100000000000000000000000',//100000 usc
            '100000000000000000000000',//100000 sea
            0,
            0,
            deployer.address,
            Math.round(new Date() / 1000) + 1000
        );
        console.log("addLiquidity"); await sleep(1000);
    }


    /**
     * Oracle
     */
    const Oracle = await ethers.getContractFactory('Oracle');
    if (contracts.oracle) {
        var oracle = Oracle.attach(contracts.oracle);
    } else {
        oracle = await upgrades.deployProxy(Oracle, [contracts.signer], { initializer: 'initialize' }); await sleep(1000);
        await oracle.deployed(); await sleep(1000);
        await oracle.setExecutor(contracts.signer, true); console.log("oracle setExecutor - signer"); await sleep(1000);
    }
    contracts.oracle = oracle.address;
    console.log("oracle:", contracts.oracle);

    /**
     * farm
     * address _sea,
        address _devaddr,
        uint256 _seaPerBlock,
        uint256 _startBlock,
        uint256 _bonusEndBlock
     */
    const Farm = await ethers.getContractFactory('FairLaunch');
    if (contracts.farm) {
        var farm = Farm.attach(contracts.farm);
    } else {
        // farm = await upgrades.deployProxy(Farm, [contracts.sea, deployer.address, '1000000000000000000', '0', '0'], { initializer: 'initialize' });
        farm = await Farm.deploy(contracts.sea, deployer.address, '1000000000000000000', '0', '0'); await sleep(1000);
        await farm.addPool('1000', contracts.usdc_usc_lp, true); await sleep(1000);
        console.log("addPool usdc_usc_lp:");
        await farm.addPool('1000', contracts.sea_usc_lp, true); await sleep(1000);
        console.log("addPool sea_usc_lp:");
    }
    contracts.farm = farm.address;
    console.log("farm:", contracts.farm);





    /**
     * stabilizer
     */
    const Stabilizer = await ethers.getContractFactory('stabilizer');
    if (contracts.stabilizer) {
        var stabilizer = Stabilizer.attach(contracts.stabilizer);
    } else {
        stabilizer = await upgrades.deployProxy(Stabilizer, [contracts.usdc_usc_lp, contracts.usdc, contracts.usc], { initializer: 'initialize' }); await sleep(1000);
        await stabilizer.deployed(); await sleep(1000);
    }
    contracts.stabilizer = stabilizer.address;
    console.log("stabilizer:", contracts.stabilizer);



    /**
     * helperLogic
     */
    const HelperLogic = await ethers.getContractFactory('helperLogic');
    if (contracts.helperLogic) {
        var helperLogic = HelperLogic.attach(contracts.helperLogic);
    } else {
        helperLogic = await upgrades.deployProxy(HelperLogic, [contracts.pancakeFactory, contracts.pancakeRouter, contracts.usc, contracts.usdc, contracts.sea, contracts.ssea, contracts.farm], { initializer: 'initialize' });
        await helperLogic.deployed(); await sleep(1000);
    }
    contracts.helperLogic = helperLogic.address;
    console.log("helperLogic:", contracts.helperLogic);



    /**
     * mirrorseaMain
    */
    const MirrorseaMain = await ethers.getContractFactory('mirrorseaMain');
    if (contracts.mirrorseaMain) {
        var mirrorseaMain = MirrorseaMain.attach(contracts.mirrorseaMain);
    } else {
        mirrorseaMain = await upgrades.deployProxy(MirrorseaMain, [contracts.signer, contracts.helperLogic, contracts.usc, contracts.oracle], { initializer: 'initialize' });
        await mirrorseaMain.deployed(); await sleep(1000);
    }
    contracts.mirrorseaMain = mirrorseaMain.address;
    console.log("mirrorseaMain:", contracts.mirrorseaMain);

    await farm.setExecutor(contracts.helperLogic, true); console.log("setExecutor - farm"); await sleep(1000);
    await helperLogic.setStabilizer(contracts.stabilizer); console.log("setStabilizer - stabilizer"); await sleep(1000);

    await helperLogic.setExecutor(contracts.mirrorseaMain, true); console.log("helperLogic setExecutor - mirrorseaMain"); await sleep(1000);
    await helperLogic.setPid(0); console.log("helperLogic setPid - 0"); await sleep(1000);
    await oracle.setExecutor(contracts.mirrorseaMain, true); console.log("oracle setExecutor - mirrorseaMain"); await sleep(1000);
    await usc.setExecutor(contracts.mirrorseaMain, true); console.log("usc setExecutor - mirrorseaMain"); await sleep(1000);
    await stabilizer.setExecutor(contracts.helperLogic, true); console.log("stabilizer setExecutor - helperLogic"); await sleep(1000);
    await usc.setExecutor(contracts.stabilizer, true); console.log("usc setExecutor - stabilizer"); await sleep(1000);

    await sea.setExecutor(contracts.farm, true); console.log("sea setExecutor - farm"); await sleep(1000);
    await helperLogic.setFarm(contracts.farm); console.log("helperLogic setFarm - farm"); await sleep(1000);

    await helperLogic.setOp(contracts.op); console.log("helperLogic setOp"); await sleep(1000);
    await helperLogic.setDev(contracts.dev); console.log("helperLogic setDev "); await sleep(1000);

    console.log("////////////////////全部合约//////////////////////");
    console.log("contracts:", contracts);
    console.log("/////////////////////END/////////////////////");

    //給機器人打錢，授權mirrorseaMain 扣他usc 作為手續費

    return;



}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })

    //npx hardhat run --network polygon scripts/deploy.js



