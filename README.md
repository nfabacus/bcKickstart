# Block Chain Kickstart
This is just an experiment to use Blockchain on an Kickstarter like app - follow along on a Udemy course.

1. install libraries
```
npm install --save ganache-cli mocha solc fs-extra web3@1.0.0-beta.26 
```

2. Directory Structure
  - Create a 'ethereum' folder.
    - Create contracts folder to place contract files.
      - add contract file (e.g. Campaign.sol)
    - Create compile.js and deploy.js files.
  - Create a test folder (in the root if we want to put client side app tests as well here)
    - Insde the 'test' folder, create a test file (e.g. Campaign.test.js)
    - Make sure to add script for test in package.json
      ```
      "scripts": {
        "test": "mocha"
      },

      ```
3. Deploying to Rinkeby Network for test<br>
  Flow of communication this time:<br>
  API - web3 instance with Rinkeby network provider - connects via Infura's API to Infura's Node in Rinkeby Network.
  - Signup at Infura.io
  - install truffle-hdwallet-provider (Provider)
  ```
  npm install --save truffle-hdwallet-provider@0.0.3
  ```
  - Create a file called deploy.js in ethereum folder:
  - Wire up web3 with provider to a Rinkeby network (make sure to console.log the account created, so we can see)
  - To deploy, ```node deploy.js```
  - Check the address of the contract and go to https://rinkeby.etherscan.io. You can see if the contract is deployed by searching for the address.
  - To interact with the contract in the test network:
    Go to http://remix.ethereum.org:
    Click run tab.
    copy and paste the contract in Remix (if it is not there already), 
    select 'Injected Web3' under Environment.
    check the Account is yours in your Metamask.
    Paste in the newly deployed contract address into 'at Address' (instead of 'Create'), then click.
    It will display the deployed instance of the contract.
    Now you can interact with the contract.

    

