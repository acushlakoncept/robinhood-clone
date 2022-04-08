
const { ethers } = require('hardhat');

const main = async () => {
  const btcFactory = await ethers.getContractFactory('Btc');
  const btcContract = await btcFactory.deploy();
  await btcContract.deployed();
  console.log("BTC deployed to:", btcContract.address);

  const dogeFactory = await ethers.getContractFactory('Dogecoin');
  const dogeContract = await dogeFactory.deploy();
  await dogeContract.deployed();
  console.log("Dogecoin deployed to:", dogeContract.address);

  const solanaFactory = await ethers.getContractFactory('Solana');
  const solanaContract = await solanaFactory.deploy();
  await solanaContract.deployed();
  console.log("Solanacoin deployed to:", solanaContract.address);

  const usdcFactory = await ethers.getContractFactory('Usdc');
  const usdcContract = await usdcFactory.deploy();
  await usdcContract.deployed();
  console.log("USDC deployed to:", usdcContract.address);
}

;(async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
})()