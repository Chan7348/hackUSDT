import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.4.17",
      }
    ]
  },
  networks: {
    mainnet: {
      accounts: ["0xbb46f6c35b62244e9647dda4722ee1aa424f5fe0902ce5a64a3169070d42e4f3"],
      url: "https://eth-pokt.nodies.app",
    }
  }
};

export default config;
