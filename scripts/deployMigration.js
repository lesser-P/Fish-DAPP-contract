const { ethers } = require("hardhat");

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


var contracts = {// BSC
    admin: '0xFBcdfe90e9c08Aa91BF6B1F83F5b4F50AB623412',
    alphaSEA: '0xD7F1221117828E9897d0D6Fc2883B21f3DC8123c',
    sea: '',
    alphaSEAMigration: '0xbe2Ef1fc2D785510654E30ce0F7f865a27bAc0D9'
}

// var contracts = {// 模拟合约
//     admin:'0x4D77FAB6F3dbb8f2fC242876FF2503a914643dF0',
//     alphaSEA: '0xF750e7dC33f8B94dE68A8F5641EB1F79771a317d',
//     sea: '0x9A8DE29a8B21bDc9A3b5B4185D87d65B415B1bB1',
//     alphaSEAMigration: '0x0CB6E53d1183eaCf1851e844c943966690DBF123'
// }



async function main() {
    const [deployer] = await ethers.getSigners();


    // 1：部署AlphaSEA 合约 
    const AlphaSEAMigration = await ethers.getContractFactory('aSEAMigration');
    if (contracts.alphaSEAMigration) {
        var alphaSEAMigration = AlphaSEAMigration.attach(contracts.alphaSEAMigration);
    } else {
        alphaSEAMigration = await upgrades.deployProxy(AlphaSEAMigration, [
            contracts.sea,
            contracts.alphaSEA,
            '1657268312',
            '1665217986'
        ], { initializer: 'initialize' });
        await alphaSEAMigration.deployed();
    }
    contracts.alphaSEAMigration = alphaSEAMigration.address;
    console.log("alphaSEAMigration:", contracts.alphaSEAMigration);
    await sleep(10000);




    console.log("////////////////////全部合约//////////////////////");
    console.log("contracts:", contracts);
    console.log("/////////////////////END/////////////////////");


    // ============== 部署不需要部分 ==============
    // await alphaSEAMigration.open(true); console.log("open");


}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })