require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const projectId = "b2f0fcc5029841b99df1ed4be764841a"
const privateKey = fs.readFileSync(".env").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
