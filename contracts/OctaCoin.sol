pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract OctaCoin is MintableToken {
  string public _name = "OCTA COIN";
  string public _symbol = "OCT";
  uint8 public _decimals = 18;
  uint public _totalSupply = 0;
}