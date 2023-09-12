const { ethers } = require("hardhat");

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var contracts = {// BSC
    admin: '0xFBcdfe90e9c08Aa91BF6B1F83F5b4F50AB623412',
    idoDAO: '0xd90D49e1d466F50c91470090198040A062315a6E',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    alphaSEA: '0xD7F1221117828E9897d0D6Fc2883B21f3DC8123c',
    sEAPreSale: '0x068CF7F8042b4AC0329eDd04BcD35Fc17223cEdf'
}


// var contracts = {// 模拟合约
//     admin:'0x4D77FAB6F3dbb8f2fC242876FF2503a914643dF0',
//     idoDAO: "0xD6fd44af1F385a25FFC291e476b82F95228dfD19",
//     usdc: '0xbe2Ef1fc2D785510654E30ce0F7f865a27bAc0D9',
//     alphaSEA: '0xF750e7dC33f8B94dE68A8F5641EB1F79771a317d',
//     sEAPreSale: '0x2aC9a6456Ca4d71c634f8bDdab1BD4aD2e67d045'
// }



async function main() {
    const [deployer] = await ethers.getSigners();

    // const USDC = await ethers.getContractFactory('USDCERC20Token');
    // const usdc = await USDC.deploy();
    // contracts.usdc = usdc.address;
    // console.log("usdc:", contracts.usdc);
    // await sleep(10000);

    // 1：部署AlphaSEA 合约 
    const AlphaSEA = await ethers.getContractFactory('AlphaSEA');
    if (contracts.alphaSEA) {
        var alphaSEA = AlphaSEA.attach(contracts.alphaSEA);
    } else {
        alphaSEA = await upgrades.deployProxy(AlphaSEA, ['AlphaSEA', 'AlphaSEA', deployer.address, '625000000000000000000000'], { initializer: 'initialize' }); //1w USC 做盘用
        await alphaSEA.deployed();
    }
    contracts.alphaSEA = alphaSEA.address;
    console.log("alphaSEA:", contracts.alphaSEA);
    await sleep(10000);

    // 2：创建IDO合约  funsdao: 
    const SEAPreSale = await ethers.getContractFactory('SEAPreSale');
    if (contracts.sEAPreSale) {
        var sEAPreSale = SEAPreSale.attach(contracts.sEAPreSale);
    } else {
        sEAPreSale = await upgrades.deployProxy(SEAPreSale, [
            contracts.idoDAO,
            contracts.alphaSEA,
            contracts.usdc,
            "0",
            "2000000000000000000000", //2,000 usdc 
            "500000000000000000000000", //500,000 usdc 
            "800000000000000000",//  0.8usdc 
            "1657268312",//开始时间戳
            "1657268312",//结束时间戳
            "2000000000000000000000"//结束 后 最多购买2,000 usdc
        ], { initializer: 'initialize' });
        await sEAPreSale.deployed();
    }
    contracts.sEAPreSale = sEAPreSale.address;
    console.log("sEAPreSale:", contracts.sEAPreSale);
    await sleep(10000);

    await alphaSEA.transfer(sEAPreSale.address, "625000000000000000000000");
    console.log("转aSEA 给 ido合约 【625000个 aSEA】");


    console.log("////////////////////全部合约//////////////////////");
    console.log("contracts:", contracts);
    console.log("/////////////////////END/////////////////////");








    // ============== 部署不需要部分 ==============
    await sEAPreSale.whiteListBuyers([
        deployer.address
    ])
    // await usdc.approve(sEAPreSale.address, "100000000000000000000000000000000000");
    // await sEAPreSale.purchaseaSEA("2000000000");


}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })