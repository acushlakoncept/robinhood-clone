require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'})

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY]
    }
  }
};
