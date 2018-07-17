var CoderToken = artifacts.require('./CoderToken.sol');

module.exports = function(deployer) {
  deployer.deploy(CoderToken);
}
