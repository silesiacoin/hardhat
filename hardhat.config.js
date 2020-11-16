require("@nomiclabs/hardhat-waffle");

let mnemonic = process.env.MNEMONIC;
if (typeof mnemonic === 'undefined')
  mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.l14.lukso.network"
      },
    }
  }
};
