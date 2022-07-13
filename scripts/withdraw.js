const { getNamedAccounts, ethers } = require("hardhat");

const main = async () => {
  const { deployer } = getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("withdrawing...");
  const txRes = await fundMe.withdraw();
  await txRes.wait(1);
  console.log("got it back!");
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
