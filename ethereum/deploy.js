const path = require('path'); //for cross platform compatibility
require('dotenv').config({path: path.join(__dirname, "../.env")});
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  process.env.MNEMONIC, //pass your mnemonic via dotenv
  process.env.INFURAAPI //pass url for infura api via dotenv
);

const web3 = new Web3(provider);

const deploy = async () => { //to use async await, wrap the code into a function here.
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  ) //pass the interface of the contract to web3.
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000'});

  console.log('Contract deployed to', result.options.address);
};
deploy();