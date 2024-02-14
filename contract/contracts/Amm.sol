// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Amm {

 uint256 public  totalshare ;
 uint256 public totaltoken1 ;
 uint256 public totaltoken2 ;
 using SafeMath for uint256 ;

uint256 constant  PRECISION = 1_000_000  ;
mapping(address => uint256) shares;  

mapping(address => uint256) token1Balance;  
mapping(address => uint256) token2Balance;
uint256 k ;

modifier  validAmountcheck (mapping  (address => uint256 ) storage _balance , uint256 deposit ) {
    require( deposit >0 , "amount should be grater then 0"); 
    require(_balance[msg.sender] >= deposit , "insufficient balance");
    _;
}
modifier  activePool() {
    require(totalshare > 0 , "no liquidity is left");
    _;
}


function gettotaltoken1() public view returns (uint256) {
    return totaltoken1 ;
}
function totalsharein() public view returns (uint256) {
    return totalshare ;
}
function gettotaltoken2() public view returns (uint256) {
    return totaltoken2 ;
}

function getHolding() external  view returns (uint256  , uint256  , uint256 ) {
    uint256 token1 = token1Balance[msg.sender] ;
    uint256 token2 = token2Balance[msg.sender];
    uint256 myshare = shares[msg.sender] ;
    return (token1 , token2 , myshare ) ;
}

function getPoolInfo() external view returns(uint256 , uint256 , uint256 ){
    return (totaltoken1 , totaltoken2 , totalshare ) ;
}


function addFaucet(uint256 amountt1 , uint256 amountt2) external {
token1Balance[msg.sender] = token1Balance[msg.sender].add(amountt1) ;
token2Balance[msg.sender] = token2Balance[msg.sender].add(amountt2) ;
}

function getequivalenttoken1est(uint256 _amtToken1) public view activePool() returns (uint256 ) {
    return totaltoken1.mul(_amtToken1).div(totaltoken2) ;
}

function getequivalenttoken2est(uint256 _amtToken2) public view activePool() returns (uint256 ) {
    return totaltoken2.mul(_amtToken2).div(totaltoken1) ;
}


function provide (uint256 amountt1 , uint256 amountt2 ) external validAmountcheck(token1Balance , amountt1 ) validAmountcheck(token2Balance , amountt2 ) returns (uint256 share) {
// if this is the genesis  then whole is send to this 
if (totalshare == 0) {
    share = 100 * PRECISION ;
}
else {
    uint256 share1 = totalshare.mul(amountt1).div(totaltoken1) ;
    uint256 share2 = totalshare.mul(amountt2).div(totaltoken2) ;
    require(share1 == share2 , "must be in same proportion ");
    share = share1 ;
}

require (share > 0 ," share must be greater ") ;
// decrease the amount of the token which is given to the liquidity pool
token1Balance[msg.sender] -= amountt1 ;
token2Balance[msg.sender] -= amountt2 ;

// increasing the share of the ind 
totaltoken1 += amountt1 ;
totaltoken2 += amountt2 ;
k = totaltoken1.mul(totaltoken2) ;
    
shares[msg.sender] += share ;
totalshare += share ;
}


function requiredtoken2 (uint256 amountt1) external view   activePool returns (uint256 reqToken2 ) {
    reqToken2 =   totaltoken2.mul(amountt1).div(totaltoken1);  
}
function requiredtoke1(uint256 amountt2) external view returns (uint256 reqtoken1) {
    reqtoken1 = totaltoken1.mul(amountt2).div(totaltoken2);
}


function tokenEstimated(uint256 _share)  public view activePool returns (uint amountt1 , uint256 amountt2 ) {
     require(_share <= totalshare, "Share should be less than totalShare");
    amountt1 = _share.mul(totaltoken1).div(totalshare) ;
    amountt2 = _share.mul(totaltoken2).div(totalshare) ;

}


function withdraw(uint _share ) external activePool validAmountcheck(shares , _share) returns  (uint256 amountt1 , uint256 amountt2){

(amountt1 , amountt2) = tokenEstimated(_share);

shares[msg.sender ] -= _share ;
totalshare -= _share ;

totaltoken1 -= amountt1 ;
totaltoken2 -= amountt2 ;

k = totaltoken1.mul(totaltoken2) ;

token1Balance[msg.sender] += amountt1 ;
token2Balance[msg.sender] += amountt2 ;
} 



// making ther swap  function 

function estimationOftoken1 (uint256 amttoken1) public activePool() view returns(uint256 amttoken2 ) {

uint256 amtt1after = totaltoken1.add(amttoken1) ;
uint amtt2after = k.div(amtt1after) ;
amttoken2 = totaltoken2.sub(amtt2after) ;

if (amttoken2 == totaltoken2 ) amttoken2--;
}




function getSwaptoken1giventoken2(uint256 amtt2) public activePool() view returns (uint256 amtt1)
 {
require(amtt2 < totaltoken2 , "insufficent pool ");
uint256 token2after = totaltoken2.sub(amtt2) ;
uint256 token1after = k.div(token2after) ;
amtt1 = token1after.sub(totaltoken1) ;
}

function swapt1(uint256 amtt1 ) external activePool() validAmountcheck(token1Balance , amtt1) returns  (uint256 amtt2)
 {
    amtt2 = estimationOftoken1(amtt1);
    token1Balance[msg.sender] -= amtt1 ;
    totaltoken1 += amtt1 ;
    totaltoken2 -=amtt2 ;
    token2Balance[msg.sender] += amtt2 ;
}

function estimationOftoken2(uint256 ammt2) public view activePool() returns (uint256 amtt1) {
    uint256 t2after = totaltoken2.add(ammt2) ;
    uint256 t1after = k.div(t2after) ;
    amtt1 = totaltoken1.sub(t1after);
    if (amtt1 == totaltoken1 ) amtt1-- ;
}

function getSwaptoken2giventoken1(uint256 amtt1) public  view activePool() returns (uint256 amtt2) 
{
require(amtt1 < totaltoken1 , "insufficeint pool ");
uint256 t1after = totaltoken1.sub(amtt1) ;
uint256 t2after = k.div(t1after) ;
amtt2 = t2after.sub(totaltoken2) ;

}

function swap2(uint256 amtt2) external activePool() validAmountcheck(token2Balance , amtt2 ) returns(uint256 amtt1) {
    amtt1 = estimationOftoken2(amtt2); 
    token2Balance[msg.sender] -=amtt2 ;
    totaltoken2 += amtt2 ;
    totaltoken1 -= amtt1 ;  
    token1Balance[msg.sender] += amtt1 ;
}
}
