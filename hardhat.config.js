require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectID = "0b6a800c35e0406da859018d5aded59f"

module.exports = {
  networks: {
    hardhat: {
      chainID: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `wss://palm-mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
