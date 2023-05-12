require("dotenv").config()
require("@reef-defi/hardhat-reef")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "reef",
  networks: {
    reef: {
      url: "ws://substrate-node:9944",
      scanUrl: "<http://api:8000>",
    },
    reef_testnet: {
      // url: "wss://rpc-testnet.reefscan.info/ws",
      // scanUrl: "https://api-testnet.reefscan.info", 
      url: "wss://rpc-testnet.reefscan.com/ws",
      scanUrl: "https://testnet.reefscan.com", 
      seeds: {
        testnet_account: `${process.env.MNEMONIC_SEEDS}`, // SEED GOES HERE
      },
    },
    reef_mainnet: {
      // url: "wss://rpc.reefscan.info/ws",
      // scanUrl: "wss://api.reefscan.info",
      url: "wss://rpc.reefscan.com/ws",
      scanUrl: "https://reefscan.com",
      seeds: {
        mainnet_account: `${process.env.MNEMONIC_SEEDS}`, // SEED GOES HERE
      },
    }
  }
};