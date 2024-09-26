// scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const initialSupply = ethers.utils.parseUnits("1000", 18); // 1000 tokens with 18 decimals
  const GinERC20 = await ethers.getContractFactory("GinTokenERC20");
  const ginERC20 = await GinERC20.deploy(initialSupply);

  await ginERC20.deployed();
  console.log(`SimpleERC20 deployed to: ${ginERC20.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
