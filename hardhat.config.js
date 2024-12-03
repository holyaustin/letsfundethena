require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
const { NEXT_PUBLIC_PRIVATE_KEY } = process.env;
console.log("key is", NEXT_PUBLIC_PRIVATE_KEY );
module.exports =  {
  defaultNetwork: 'ethenaTestnet',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },

    ethenaTestnet: {
      url: `https://testnet.rpc.ethena.fi`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
      //chainid: "52085143",
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}

