pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract CoderToken is StandardToken {
  string public name = 'CoderToken';
  string public symbol = 'CT';
  uint8 public decimals = 18;
  uint public INITIAL_SUPPLY = 15000;

  function CoderToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
