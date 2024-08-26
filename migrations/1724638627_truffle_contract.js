const TruffleContract = artifacts.require("../TruffleContract.sol");

module.exports = function(deployer) {
    deployer.deploy(TruffleContract)
};
