const { getNamedAccounts, ethers } = require("hardhat");

const main = async () => {
  const { deployer } = getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding Contract...");
  const txRes = await fundMe.fund({ value: ethers.utils.parseEther("0.1") });
  await txRes.wait(1);
  console.log("funded!");
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
