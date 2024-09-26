// test/gin.test.ts
import { expect } from "chai";
import { ethers } from "hardhat";

// Example test cases (add your contract tests here)
describe("GinTokenERC20", function () {
  let token: any;
  let owner: any;
  let addr1: any;
  let addr2: any;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const GinTokenERC20 = await ethers.getContractFactory("GinTokenERC20");
    token = await GinTokenERC20.deploy(ethers.utils.parseUnits("1000", 18));
    await token.deployed();
  });

  it("should assign the initial supply to the owner", async function () {
    expect(await token.balanceOf(owner.address)).to.equal(
      ethers.utils.parseUnits("1000", 18)
    );
  });

  it("should transfer tokens successfully", async function () {
    await token.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
    expect(await token.balanceOf(addr1.address)).to.equal(
      ethers.utils.parseUnits("100", 18)
    );
  });

  it("should fail if trying to transfer more than balance", async function () {
    await expect(
      token.transfer(addr1.address, ethers.utils.parseUnits("1100", 18))
    ).to.be.revertedWith("Insufficient balance");
  });
});
