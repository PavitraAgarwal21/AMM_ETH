
import './App.css';
import { Contract_Address, abi } from "./constant"
import { useState , useEffect } from 'react';
import { Contract, ethers } from 'ethers';
function App()
{
  const [contractprov, setcontractprov] = useState("");
  const [contractsign, setcontractsign] = useState("");
  const [signer , setsigner] = useState("");
  let provider ;




  async function contract_creation() {

   // provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545/');
     await window.ethereum.request({method: 'eth_requestAccounts'});
    provider = new ethers.BrowserProvider(window.ethereum) ;
    let ss = await  provider.getSigner()
    setsigner (ss);
    console.log(signer);
    let contract = new Contract(Contract_Address , abi , signer) ;
    let contractread = new Contract(Contract_Address , abi , provider) ;
    setcontractprov(new Contract(Contract_Address, abi, provider));
    console.log(contractprov);
    setcontractsign(new Contract(Contract_Address, abi, signer));
    console.log(contractsign);
  }
  async function _getAddress() {
    let _address =  signer.address;
    console.log(_address) ;
  }
async function Rtotaltoken1() {
  let totaltoken1 = await contractprov.gettotaltoken1() ;
  console.log(totaltoken1.toString()) ;
}
async function Rtotaltoken2() {
  let totaltoken1 = await contractprov.gettotaltoken2() ;
  console.log(totaltoken1.toString()) ;
}
async function totalsharein() {
  let totaltoken1 = await contractprov.totalsharein() ;
  console.log(totaltoken1.toString()) ;
}
// get my the msg.sender 
async function getholding() {
  let getholding = await contractsign.getHolding();
  console.log(getholding) ;
}
async function getPoolInfo() {
  let poolinfo = await contractprov.getPoolInfo() ;
  console.log(poolinfo);
}
// now calling the signer function 
async function faucet() {
  let tx = await contractsign.addFaucet(1000 ,1000) ;
  await tx.wait() ;
}
const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);
// const [shares , setshare ] = useState(0) ;
const handleFirstInputChange = (e) => {
  setFirstNumber(parseInt(e.target.value, 10));
};
const handleSecondInputChange = (e) => {
  setSecondNumber(parseInt(e.target.value, 10));
};
async function providetopool() {
  let tx  = await contractsign.provide(firstNumber,secondNumber);
  await tx.wait() ;
}

async function tokenweget() { 
  let tokens = await contractsign.tokenEstimated(firstNumber); 
  console.log(tokens) ;
}

// in this we swapping token 1 for token2 
// this gave the get to know the amount of token 2 on swapping token1 
const [token1est , setToken1est] = useState(0) ;
const [token2est , setToken2est] = useState(0) ;
const handleToken2Changeestimate = (e) => {
  setToken2est(parseInt(e.target.value, 10));
};
const  handletoken1Changeestimate = (e) => {
  setToken1est(parseInt(e.target.value, 10));
};
useEffect(() => {
  const calculate = async () => {
     let  provider = new ethers.BrowserProvider(window.ethereum) ; 
  let signer =  await  provider.getSigner() ;
  let contract = new Contract(Contract_Address , abi , signer) ;
    let contractread = new Contract(Contract_Address , abi , provider) ;
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    const result = await contractread.estimationOftoken1(token1est);
    // Replace this with your actual calculation logic
    setToken2est(result);
    console.log(result);
  };
  // Perform the calculation when inputValue changes
  calculate();
}, [token1est])

const [token1est1f2 , setToken1est1f2] = useState(0) ;
const [token2est1f2 , setToken2est1f2] = useState(0) ;

const  handletoken1Changeest1f2 = (e) => {
  setToken1est1f2(parseInt(e.target.value, 10));
};
const handleToken2Changeest1f2 = (e) => {
  setToken2est1f2(parseInt(e.target.value, 10));
};
useEffect(() => {
  const calculate = async () => {
     let  provider = new ethers.BrowserProvider(window.ethereum) ; 
  let signer =  await  provider.getSigner() ;
  let contract = new Contract(Contract_Address , abi , signer) ;
    let contractread = new Contract(Contract_Address , abi , provider) ;
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    const result = await contractread.getSwaptoken1giventoken2(token2est1f2);
    // Replace this with your actual calculation logic
    setToken1est1f2(result);
    console.log(result);
  };
  // Perform the calculation when inputValue changes
  calculate();
}, [token2est1f2])



/////////////////////////////////////////////////////////////////////////
// swapping token2 for token 1 
const [token1est2 , setToken1est2] = useState(0) ;
const [token2est2 , setToken2est2] = useState(0) ;
const handleToken2Changeestimate2 = (e) => {
  setToken2est2(parseInt(e.target.value, 10));
};
const  handletoken1Changeestimate2 = (e) => {
  setToken1est2(parseInt(e.target.value, 10));
};
useEffect(() => {
  const calculate = async () => {
     let  provider = new ethers.BrowserProvider(window.ethereum) ; 
  let signer =  await  provider.getSigner() ;
  let contract = new Contract(Contract_Address , abi , signer) ;
    let contractread = new Contract(Contract_Address , abi , provider) ;
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    const result = await contractread.estimationOftoken2(token2est2);
    // Replace this with your actual calculation logic
    setToken1est2(result);
    console.log(result);
  };
  // Perform the calculation when inputValue changes
  calculate();
}, [token2est2])

///////////////////////////////////////////////////////

////swap token 2 to token 1 
////know amount of token 2 want to get this amount of token 1

const [token1est2f1 , setToken1est2f1] = useState(0) ;
const [token2est2f1 , setToken2est2f1] = useState(0) ;

const  handletoken1Changeest2f1 = (e) => {
  setToken1est2f1(parseInt(e.target.value, 10));
};
const handleToken2Changeest2f1 = (e) => {
  setToken2est2f1(parseInt(e.target.value, 10));
};
useEffect(() => {
  const calculate = async () => {
     let  provider = new ethers.BrowserProvider(window.ethereum) ; 
  let signer =  await  provider.getSigner() ;
  let contract = new Contract(Contract_Address , abi , signer) ;
    let contractread = new Contract(Contract_Address , abi , provider) ;
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    const result = await contractread.getSwaptoken2giventoken1(token1est2f1);
    // Replace this with your actual calculation logic
    setToken2est2f1(result);
    console.log(result);
  };
  // Perform the calculation when inputValue changes
  calculate();
}, [token1est2f1])

////////////////////////////////////////////
//swap token2 to token1 


const [swapt2 , setswapt2] = useState(0);
const handleSwap2 = (e) => {
  setswapt2(parseInt(e.target.value, 10));
};
async function swap2for1 () 
{
  const result = await contractsign.swap2(swapt2) ;
  await result.wait() ;
 setswapt2(result);
  console.log(swapt1);
}
////////////////////////////////////////////
//swap token2 to token1 
const [swapt1 , setswapt1] = useState(0);
const handleSwap1 = (e) => {
  setswapt1(parseInt(e.target.value, 10));
};
async function swap1for2 () 
{
  const result = await contractsign.swapt1(swapt1) ;
  await result.wait() ;
 setswapt1(result);
  console.log(swapt1);
}
/////////////////////////////////////////////
//withdraw 
const [shareshave  , setsharehave] = useState(0) ;
const handlesharehaveChanges =(e) => {
  setsharehave(parseInt(e.target.value, 10));
}
async function withdrawfrom() {
  const result = await contractsign.withdraw(shareshave) ;
  await result.wait() ;
  setsharehave(result) ;
  console.log(result) ;
}





















  return (
    <div className="App">
        <button onClick={contract_creation}> contract create</button>
        <button onClick={_getAddress}> Address  </button>
        <button onClick={Rtotaltoken1}> totaltoken1 </button>
        <button onClick={Rtotaltoken2}> totaltoken2  </button>
        <button onClick={totalsharein}> totalshare  </button>
        <button onClick={getholding}> getholding  </button>
        <button onClick={getPoolInfo}> poolinfo  </button>
        <button onClick={faucet}> faucet  </button>
  

            <div>
      <label>
        First Number:
        <input type="number" value={firstNumber} onChange={handleFirstInputChange} />
      </label>
      <br />
      <label>
        Second Number:
        <input type="number" value={secondNumber} onChange={handleSecondInputChange} />
      </label>
      <br />
      <button onClick={providetopool}> providetopool </button>
      <br />
      <label>
        shares :
        <input type="number" value={firstNumber} onChange={handleFirstInputChange} />
      </label>
      <br />
      <button onClick={tokenweget}> tokenweget  </button>
    </div>



    <div>
    <p>swap token1 </p> 

<label>
  <p>estimation of token2  you get  (token1 -token 2) </p>
<input type='number' value = {token1est} onChange={handletoken1Changeestimate}></input>
<br/>
</label>
<label>
<p> estimation of token1 you want to get specific token2 (token1-token2) {token1est1f2}  </p> 
<input type='number' value = {token2est1f2} onChange={handleToken2Changeest1f2}></input>
<br/>

</label>

<p>swap token1 - token2 </p>
<input type='number' value={swapt1} onChange={handleSwap1}></input> 
<button onClick={swap1for2} > swap 1</button>
    </div> 
    {/* // swap token 2  */}

 
<div>
      <label>
      <p> estimation of token1  you get  (token2 -token 1) {token1est2}  </p> 
  <input type='number' value = {token2est2} onChange={handleToken2Changeestimate2}></input>
  </label>
    </div>  


    <div>
      <label>
      <p> estimation of token2  you want to get specific token1 (token2-token1): {token2est2f1}  </p> 
  <input type='number' value = {token1est2f1} onChange={handletoken1Changeest2f1}></input>
  </label>
    </div>  
    <div>
      <p>swap token2-token1</p>
      <input type='number' value={swapt2} onChange={handleSwap2}></input> 
<button onClick={swap2for1} > swap 2</button>
</div>



<div>
<p>withdrawing the tokens </p>
<label>
<input type='number' value = {shareshave} onChange={handlesharehaveChanges}></input>
<button onClick={withdrawfrom}>withdraw</button>
</label>





</div>




</div>
  );
}
export default App;
