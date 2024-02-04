export const Contract_Address = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
export const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountt1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountt2",
        "type": "uint256"
      }
    ],
    "name": "addFaucet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amttoken1",
        "type": "uint256"
      }
    ],
    "name": "estimationOftoken1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amttoken2",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ammt2",
        "type": "uint256"
      }
    ],
    "name": "estimationOftoken2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amtt1",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getHolding",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPoolInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amtt2",
        "type": "uint256"
      }
    ],
    "name": "getSwaptoken1giventoken2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amtt1",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amtt1",
        "type": "uint256"
      }
    ],
    "name": "getSwaptoken2giventoken1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amtt2",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gettotaltoken1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gettotaltoken2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountt1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountt2",
        "type": "uint256"
      }
    ],
    "name": "provide",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "share",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountt2",
        "type": "uint256"
      }
    ],
    "name": "requiredtoke1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "reqtoken1",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountt1",
        "type": "uint256"
      }
    ],
    "name": "requiredtoken2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "reqToken2",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amtt2",
        "type": "uint256"
      }
    ],
    "name": "swap2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amtt1",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amtt1",
        "type": "uint256"
      }
    ],
    "name": "swapt1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amtt2",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_share",
        "type": "uint256"
      }
    ],
    "name": "tokenEstimated",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountt1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountt2",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalshare",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalsharein",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totaltoken1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totaltoken2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_share",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountt1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountt2",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]