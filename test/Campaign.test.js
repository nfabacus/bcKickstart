require('events').EventEmitter.defaultMaxListeners = 100;
const assert = require('assert'); //built-in assertion library in node
const ganache = require('ganache-cli'); // to connect to a ganache test network.
const Web3 = require('web3');  //constructor function of Web3, not its instance
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000'});
  
  await factory.methods.createCampaign('100')
    .send({
      from: accounts[0],
      gas: '1000000'
    });
  
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); //get the addresses and take the first one from the array and assign it to 'campaignAddress'

  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface), //1st arg - pass the interface of the contract
    campaignAddress //2nd arg - pass the address of the existing contract.
  );
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money and mark them as approvers', async () => {
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });
});

