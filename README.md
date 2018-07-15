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
      

