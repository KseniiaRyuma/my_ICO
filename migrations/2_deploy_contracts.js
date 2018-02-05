var BlockchainLabsCrowdsale = artifacts.require("./OctaCoinCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  return liveDeploy(deployer, accounts);
};

function latestTime() {
  return web3.eth.getBlock('latest').timestamp;
}

const duration = {
  seconds: function(val) { return val},
  minutes: function(val) { return val * this.seconds(60) },
  hours:   function(val) { return val * this.minutes(60) },
  days:    function(val) { return val * this.hours(24) },
  weeks:   function(val) { return val * this.days(7) },
  years:   function(val) { return val * this.days(365)}
};

async function liveDeploy(deployer, accounts) {
  const BigNumber = web3.BigNumber;
  const rate = 1;
  const startTime = latestTime() + duration.minutes(1);
  const endTime =  startTime + duration.weeks(1);
  const cap = ether(20);
  console.log([startTime, endTime, rate, accounts[0], cap]);

  return deployer.deploy(OctaCoinCrowdsale, startTime, endTime, rate, accounts[0], cap).then( async () => {
    const instance = await OctaCoinCrowdsale.deployed();
    const token = await instance.token.call();
    console.log('Token Address', token);
  })
}