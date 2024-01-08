async function main() {
    const [deployer] = await ethers.getSigners();

    const network = await ethers.provider.getNetwork();
    const networkName = network.name;
  
    console.log("Deploying contracts with the account:", deployer.address);
  

    console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)));
  
    const Token = await ethers.getContractFactory("rbourgeat42"); //Replace with name of your smart contract
    const token = await Token.deploy();
    const token_address = await token.getAddress();
  
    console.log("Token address:", token_address);

    if (networkName === "sepolia") {
      console.log("Info: ", "https://sepolia.etherscan.io/address/" + token_address);
    }

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  