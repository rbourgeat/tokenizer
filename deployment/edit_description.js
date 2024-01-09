const fs = require('fs');

async function main() {
    const contractAddress = '0x0smartcontractaddress'; // Replace with your smart contract address
    const newDescription = 'New Description';
    const abiPath = 'artifacts/contracts/rbourgeat42.sol/rbourgeat42.json'; // Update the path based on your contract's structure

    const [deployer] = await ethers.getSigners();

    console.log("Interacting with contracts using the account:", deployer.address);

    // Load the contract ABI
    const abiData = fs.readFileSync(abiPath);
    const abi = JSON.parse(abiData.toString()).abi;

    const contract = new ethers.Contract(contractAddress, abi, deployer);
    console.log('Smart Contract Address:', contractAddress);

    // Call the description function
    try {
        const contractDescription = await contract.description();
        console.log('Smart Contract Description:', contractDescription);
    } catch (error) {
        console.error('Failed to fetch contract description:', error);
    }

    // Call the updateDescription function
    try {
        const transaction = await contract.updateDescription(newDescription);
        await transaction.wait();
        console.log('Description updated successfully to:', newDescription);
    } catch (error) {
        console.error('Failed to update description:', error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
