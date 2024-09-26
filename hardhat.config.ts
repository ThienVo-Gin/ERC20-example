import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    shibuya: {
      url: process.env.SHIBUYA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

export default config;
