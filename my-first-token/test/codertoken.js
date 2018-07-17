var CoderToken = artifacts.require('./CoderToken.sol');

contract('CoderToken', function(accounts) {
  it('Should put 15000 CoderToken in the first account', function() {
    return CoderToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 15000, "15,000 CoderToken wasn't in the first acount.")
    });
  });
  it('Should send 10 CoderTokens correctly', function() {
    var token;

    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return CoderToken.deployed().then(function(instance) {
      token = instance;
      return token.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return token.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return token.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return token.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return token.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't successfully taken from the sender.")
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't successfully sent to the receiver.")
    });
  });
});
