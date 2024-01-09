async function main() {
    const [deployer] = await ethers.getSigners();

    const network = await ethers.provider.getNetwork();
    const networkName = network.name;
  
    console.log("Deploying contracts with the account:", deployer.address);
  

    console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)));
  
    const name = "rbourgeat42bonus";
    const symbol = "R42";
    const initialSupply = 424242;
    const owners = [deployer.address, deployer.address];
    const requiredSignatures = 2;

    const MultisigToken = await ethers.getContractFactory("rbourgeat42bonus"); //Replace with name of your smart contract
    const token = await MultisigToken.deploy(
      name,
      symbol,
      initialSupply,
      owners,
      requiredSignatures
    );
    const token_address = await token.getAddress();


  
    console.log("Token address:", token_address);

    if (networkName === "sepolia") {
      console.log("Verify contract: ", "https://sepolia.etherscan.io/address/" + token_address);
    }

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  