# Tokenizer

Create, compile, deploy an verify your own Smart Contract with Hardhat !

## Pre-requisites

There are a few technical requirements before we start as listed below:

- [Node.js v10+ LTS and npm](https://nodejs.org) (comes with Node)
- [Git](https://git-scm.com)
- Download project with `git clone git@github.com:rbourgeat/tokenizer.git`
- Create a METAMASK account or other crypto account
- Launch project with `cd code && npm install`

## (optional) Create

Copy my **BEP20Token** contract (`./code/contracts/rbourgeat42.sol`) and customize it if you want !

## Compile

Next compile your contract with this:

```bash
npx hardhat compile
```

## Deploy

Create a `secrets.json` in the `code/` folder with your **mnemonic** and a infura API_KEY (get it [here](https://app.infura.io)).

```json
{
    "mnemonic": "your_secret_recovery_phrase",
    "infuraApiKey": "your_infura_api"
}
```

> Note: It requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new `secrets.json` file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words.

Now deploy your contract with the following command:

```bash
npx hardhat run --network sepolia ../deployment/deploy.js
```

> Info: With this command we use Sepolia network for test (you can get free speolia ETH [here](https://www.infura.io/faucet/sepolia) every 24h) but you can change network for network using real money.

## Verify