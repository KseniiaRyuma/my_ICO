pragma solidity ^0.4.6;

import './OctaCoin.sol';
import 'zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';


contract OctaCoinCrowdsale is CappedCrowdsale {

  function OctaCoinCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet, uint256 _cap) CappedCrowdsale(_startTime, _endTime, _rate, _wallet, _cap) public{
  }




  // creates the token to be sold.
  // override this method to have crowdsale of a specific MintableToken token.
  function createTokenContract() internal returns (MintableToken) {
    return new OctaCoin();
  }

}