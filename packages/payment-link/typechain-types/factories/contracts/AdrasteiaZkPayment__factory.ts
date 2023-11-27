/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  AdrasteiaZkPayment,
  AdrasteiaZkPaymentInterface,
} from "../../contracts/AdrasteiaZkPayment";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPayment",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidZkSnarkProof",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "PaymentAlreadySent",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "paymentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "PaymentAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "paymentId",
        type: "uint256",
      },
    ],
    name: "PaymentSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "passcodeHash",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addPayment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "paymentId",
        type: "uint256",
      },
    ],
    name: "getPayment",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "passcodeHash",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "payments",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "passcodeHash",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "paymentId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "proof",
        type: "uint256[]",
      },
    ],
    name: "sendPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferContractOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract Groth16Verifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_pA",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "_pB",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "_pC",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "_pubSignals",
        type: "uint256[2]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002aa638038062002aa683398181016040528101906200003791906200020e565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000251565b60405180910390fd5b620000be81620000e060201b60201c565b5060008060146101000a81548160ff021916908315150217905550506200026e565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001d682620001a9565b9050919050565b620001e881620001c9565b8114620001f457600080fd5b50565b6000815190506200020881620001dd565b92915050565b600060208284031215620002275762000226620001a4565b5b60006200023784828501620001f7565b91505092915050565b6200024b81620001c9565b82525050565b600060208201905062000268600083018462000240565b92915050565b612828806200027e6000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101c2578063a843c51f146101ed578063aafab1e814610216578063e15c3c7114610241578063f2fde38b1461025d578063f5c9d69e14610286576100a7565b806318e01651146100ac5780632b7ac3f3146100d55780633280a836146101005780635c975abb14610140578063715018a61461016b57806387d8178914610182575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190611c6f565b6102c3565b005b3480156100e157600080fd5b506100ea610a6b565b6040516100f79190611d4a565b60405180910390f35b34801561010c57600080fd5b5061012760048036038101906101229190611d65565b610a91565b6040516101379493929190611dc2565b60405180910390f35b34801561014c57600080fd5b50610155610b12565b6040516101629190611e22565b60405180910390f35b34801561017757600080fd5b50610180610b28565b005b34801561018e57600080fd5b506101a960048036038101906101a49190611d65565b610b3c565b6040516101b99493929190611dc2565b60405180910390f35b3480156101ce57600080fd5b506101d7610bac565b6040516101e49190611e3d565b60405180910390f35b3480156101f957600080fd5b50610214600480360381019061020f9190611e84565b610bd5565b005b34801561022257600080fd5b5061022b610be9565b6040516102389190611eb1565b60405180910390f35b61025b60048036038101906102569190611ecc565b610bef565b005b34801561026957600080fd5b50610284600480360381019061027f9190611e84565b610e82565b005b34801561029257600080fd5b506102ad60048036038101906102a89190611f77565b610f08565b6040516102ba9190611e22565b60405180910390f35b6102cb6113ce565b60006002600084815260200190815260200160002090506000816000015411610329576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103209061203d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036103bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b3906120a9565b60405180910390fd5b6008825114610400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f790612115565b60405180910390fd5b61043e6040518060400160405280601181526020017f70726f6f6620737461727473206865726500000000000000000000000000000081525061140f565b600060405180604001604052808460008151811061045f5761045e612135565b5b60200260200101518152602001846001815181106104805761047f612135565b5b60200260200101518152509050600060405180604001604052806040518060400160405280876002815181106104b9576104b8612135565b5b60200260200101518152602001876003815181106104da576104d9612135565b5b6020026020010151815250815260200160405180604001604052808760048151811061050957610508612135565b5b602002602001015181526020018760058151811061052a57610529612135565b5b60200260200101518152508152509050600060405180604001604052808660068151811061055b5761055a612135565b5b602002602001015181526020018660078151811061057c5761057b612135565b5b6020026020010151815250905060006040518060400160405280866002015481526020013373ffffffffffffffffffffffffffffffffffffffff1681525090506105dd846000600281106105d3576105d2612135565b5b60200201516114a8565b6105fe846001600281106105f4576105f3612135565b5b60200201516114a8565b6106378360006002811061061557610614612135565b5b602002015160006002811061062d5761062c612135565b5b60200201516114a8565b6106708360006002811061064e5761064d612135565b5b602002015160016002811061066657610665612135565b5b60200201516114a8565b6106a98360016002811061068757610686612135565b5b602002015160006002811061069f5761069e612135565b5b60200201516114a8565b6106e2836001600281106106c0576106bf612135565b5b60200201516001600281106106d8576106d7612135565b5b60200201516114a8565b610703826000600281106106f9576106f8612135565b5b60200201516114a8565b6107248260016002811061071a57610719612135565b5b60200201516114a8565b6107458160006002811061073b5761073a612135565b5b60200201516114a8565b6107668160016002811061075c5761075b612135565b5b60200201516114a8565b60003073ffffffffffffffffffffffffffffffffffffffff1663f5c9d69e868686866040518563ffffffff1660e01b81526004016107a7949392919061230d565b602060405180830381865afa1580156107c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e89190612380565b90506107f381611541565b3073ffffffffffffffffffffffffffffffffffffffff1663f5c9d69e868686866040518563ffffffff1660e01b8152600401610832949392919061230d565b602060405180830381865afa15801561084f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108739190612380565b6108b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a9906123f9565b60405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168660030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036109d6576000803373ffffffffffffffffffffffffffffffffffffffff1688600001546040516109489061244a565b60006040518083038185875af1925050503d8060008114610985576040519150601f19603f3d011682016040523d82523d6000602084013e61098a565b606091505b5091509150816109cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c6906124ab565b60405180910390fd5b5050610a2a565b610a293387600001548860030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166115da9092919063ffffffff16565b5b7fd2998aff937f30c2e2da77c003382254f82a8342858df26e75489dbd1372440488604051610a599190611eb1565b60405180910390a15050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600060026000878152602001908152602001600020905080600001548160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600201548360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169450945094509450509193509193565b60008060149054906101000a900460ff16905090565b610b30611659565b610b3a60006116e0565b565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905084565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610bdd611659565b610be681610e82565b50565b60035481565b610bf7611659565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5d90612517565b60405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610cf457833414610cef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce690612583565b60405180910390fd5b610d22565b610d213330868473ffffffffffffffffffffffffffffffffffffffff166117a4909392919063ffffffff16565b5b600160036000828254610d3591906125d2565b9250508190555060405180608001604052808581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff168152506002600060035481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f06af740295f1219acfc460024f313431220d08be78ec67c8df23fde9b5faef51600354604051610e749190612652565b60405180910390a150505050565b610e8a611659565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610efc5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610ef39190611e3d565b60405180910390fd5b610f05816116e0565b50565b6000611385565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478110610f40576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa915081610f76576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915081610fa6576000805260206000f35b505050505050565b600060808601600087017f11551f5aa10b5e49e4996429c9f96e78a16b5a499f8c9bdcba053defe829106481527f2f75355b9f2e8905a6ea764151bca8395e4c23f1fbaa6d90318f6b339a3346ec602082015261105160008801357f1176413e7b2ba177e64384138136a95e6cfdaaab5016c3e232259d9b2189d5507f18577110cdcf46d62ccec432717d177f452310ee0b98c2a274b5bb9e59441ac084610f43565b6110a160208801357f1a30dbeb51d88c5fc3929ed52163937f5f74255762c52f25614ed87516bb8e8b7f26a43e1795c98155df4527176ea016bdc81320ad5e17d5d6f9de7c76275262a384610f43565b833582527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208501357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020830152843560408301526020850135606083015260408501356080830152606085013560a08301527f07e2ecbccae1dc317be711537f23a79fdad281979dae552d19dfd52525ec5e9b60c08301527f1a0a03ad6a7e5727ed254d66d2721fcdd321e50180dad02638cc01609564b0c160e08301527f0b304ed920c72f1931e847e798d729c49f6dd0d4abfe64a30f4d1625af3a2dae6101008301527f121bb52e81518bb4f7ebfa09b675d1cad56003e29b1383c102a629ec1170c83b6101208301527f14f472bf74de03015354406df88f4b57526660c9c770547cef8daa657fe1a6596101408301527f1a10af33682ca129eec96e98bdbe56c261728996e17c7686e4143fc77305e758610160830152600088015161018083015260206000018801516101a08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220830152853561024083015260208601356102608301527f2dfea7cabab6a3d6ccc5e4b08256fe235d25034798da849d2d4c5f3fae9e3d876102808301527f198561863e827f733103c8c2ed7df2f7d3bc9c88fb31cd75815b5a82fe7b82446102a08301527f0c03cf1faf19bddb4f61ec4d454fb836092496b0d9d894fd900bfe6f059d19df6102c08301527f2a1423d9ea639402ebc18be45a2d0b7a12e195b9c3d3235fb848e3b9a63e583b6102e08301526020826103008460086107d05a03fa82518116935050505095945050505050565b604051610380810160405261139d6000840135610f0f565b6113aa6020840135610f0f565b6113b76040840135610f0f565b6113c4818486888a610fae565b8060005260206000f35b6113d6610b12565b1561140d576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6114a58160405160240161142391906126ee565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611826565b50565b61153e816040516024016114bc9190611eb1565b6040516020818303038152906040527ff82c50f1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611826565b50565b6115d7816040516024016115559190611e22565b6040516020818303038152906040527f32458eed000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611826565b50565b611654838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb858560405160240161160d929190612710565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611840565b505050565b6116616118d7565b73ffffffffffffffffffffffffffffffffffffffff1661167f610bac565b73ffffffffffffffffffffffffffffffffffffffff16146116de576116a26118d7565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016116d59190611e3d565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611820848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016117d993929190612739565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611840565b50505050565b61183d816118356118df611900565b63ffffffff16565b50565b600061186b828473ffffffffffffffffffffffffffffffffffffffff1661190b90919063ffffffff16565b9050600081511415801561189057508080602001905181019061188e9190612380565b155b156118d257826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016118c99190611e3d565b60405180910390fd5b505050565b600033905090565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b611ac2819050919050565b606061191983836000611921565b905092915050565b60608147101561196857306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161195f9190611e3d565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16848660405161199191906127ac565b60006040518083038185875af1925050503d80600081146119ce576040519150601f19603f3d011682016040523d82523d6000602084013e6119d3565b606091505b50915091506119e38683836119ee565b925050509392505050565b606082611a03576119fe82611a7d565b611a75565b60008251148015611a2b575060008473ffffffffffffffffffffffffffffffffffffffff163b145b15611a6d57836040517f9996b315000000000000000000000000000000000000000000000000000000008152600401611a649190611e3d565b60405180910390fd5b819050611a76565b5b9392505050565b600081511115611a905780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611aca6127c3565b565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611af381611ae0565b8114611afe57600080fd5b50565b600081359050611b1081611aea565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b6482611b1b565b810181811067ffffffffffffffff82111715611b8357611b82611b2c565b5b80604052505050565b6000611b96611acc565b9050611ba28282611b5b565b919050565b600067ffffffffffffffff821115611bc257611bc1611b2c565b5b602082029050602081019050919050565b600080fd5b6000611beb611be684611ba7565b611b8c565b90508083825260208201905060208402830185811115611c0e57611c0d611bd3565b5b835b81811015611c375780611c238882611b01565b845260208401935050602081019050611c10565b5050509392505050565b600082601f830112611c5657611c55611b16565b5b8135611c66848260208601611bd8565b91505092915050565b60008060408385031215611c8657611c85611ad6565b5b6000611c9485828601611b01565b925050602083013567ffffffffffffffff811115611cb557611cb4611adb565b5b611cc185828601611c41565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611d10611d0b611d0684611ccb565b611ceb565b611ccb565b9050919050565b6000611d2282611cf5565b9050919050565b6000611d3482611d17565b9050919050565b611d4481611d29565b82525050565b6000602082019050611d5f6000830184611d3b565b92915050565b600060208284031215611d7b57611d7a611ad6565b5b6000611d8984828501611b01565b91505092915050565b611d9b81611ae0565b82525050565b6000611dac82611ccb565b9050919050565b611dbc81611da1565b82525050565b6000608082019050611dd76000830187611d92565b611de46020830186611db3565b611df16040830185611d92565b611dfe6060830184611db3565b95945050505050565b60008115159050919050565b611e1c81611e07565b82525050565b6000602082019050611e376000830184611e13565b92915050565b6000602082019050611e526000830184611db3565b92915050565b611e6181611da1565b8114611e6c57600080fd5b50565b600081359050611e7e81611e58565b92915050565b600060208284031215611e9a57611e99611ad6565b5b6000611ea884828501611e6f565b91505092915050565b6000602082019050611ec66000830184611d92565b92915050565b60008060008060808587031215611ee657611ee5611ad6565b5b6000611ef487828801611b01565b9450506020611f0587828801611e6f565b9350506040611f1687828801611b01565b9250506060611f2787828801611e6f565b91505092959194509250565b600081905082602060020282011115611f4f57611f4e611bd3565b5b92915050565b600081905082604060020282011115611f7157611f70611bd3565b5b92915050565b6000806000806101408587031215611f9257611f91611ad6565b5b6000611fa087828801611f33565b9450506040611fb187828801611f55565b93505060c0611fc287828801611f33565b925050610100611fd487828801611f33565b91505092959194509250565b600082825260208201905092915050565b7f496e76616c6964207061796d656e740000000000000000000000000000000000600082015250565b6000612027600f83611fe0565b915061203282611ff1565b602082019050919050565b600060208201905081810360008301526120568161201a565b9050919050565b7f496e76616c696420746f6b656e00000000000000000000000000000000000000600082015250565b6000612093600d83611fe0565b915061209e8261205d565b602082019050919050565b600060208201905081810360008301526120c281612086565b9050919050565b7f496e76616c69642070726f6f6600000000000000000000000000000000000000600082015250565b60006120ff600d83611fe0565b915061210a826120c9565b602082019050919050565b6000602082019050818103600083015261212e816120f2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060029050919050565b600081905092915050565b6000819050919050565b61218d81611ae0565b82525050565b600061219f8383612184565b60208301905092915050565b6000602082019050919050565b6121c181612164565b6121cb818461216f565b92506121d68261217a565b8060005b838110156122075781516121ee8782612193565b96506121f9836121ab565b9250506001810190506121da565b505050505050565b600060029050919050565b600081905092915050565b6000819050919050565b600081905092915050565b61224381612164565b61224d818461222f565b92506122588261217a565b8060005b838110156122895781516122708782612193565b965061227b836121ab565b92505060018101905061225c565b505050505050565b600061229d838361223a565b60408301905092915050565b6000602082019050919050565b6122bf8161220f565b6122c9818461221a565b92506122d482612225565b8060005b838110156123055781516122ec8782612291565b96506122f7836122a9565b9250506001810190506122d8565b505050505050565b60006101408201905061232360008301876121b8565b61233060408301866122b6565b61233d60c08301856121b8565b61234b6101008301846121b8565b95945050505050565b61235d81611e07565b811461236857600080fd5b50565b60008151905061237a81612354565b92915050565b60006020828403121561239657612395611ad6565b5b60006123a48482850161236b565b91505092915050565b7f4661696c6564207665726966792070726f6f6600000000000000000000000000600082015250565b60006123e3601383611fe0565b91506123ee826123ad565b602082019050919050565b60006020820190508181036000830152612412816123d6565b9050919050565b600081905092915050565b50565b6000612434600083612419565b915061243f82612424565b600082019050919050565b600061245582612427565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b6000612495601483611fe0565b91506124a08261245f565b602082019050919050565b600060208201905081810360008301526124c481612488565b9050919050565b7f496e76616c696420746f6b656e20616464726573730000000000000000000000600082015250565b6000612501601583611fe0565b915061250c826124cb565b602082019050919050565b60006020820190508181036000830152612530816124f4565b9050919050565b7f496e76616c69642076616c756500000000000000000000000000000000000000600082015250565b600061256d600d83611fe0565b915061257882612537565b602082019050919050565b6000602082019050818103600083015261259c81612560565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125dd82611ae0565b91506125e883611ae0565b9250828201905080821115612600576125ff6125a3565b5b92915050565b7f5061796d656e7420616464656400000000000000000000000000000000000000600082015250565b600061263c600d83611fe0565b915061264782612606565b602082019050919050565b60006040820190506126676000830184611d92565b81810360208301526126788161262f565b905092915050565b600081519050919050565b60005b838110156126a957808201518184015260208101905061268e565b60008484015250505050565b60006126c082612680565b6126ca8185611fe0565b93506126da81856020860161268b565b6126e381611b1b565b840191505092915050565b6000602082019050818103600083015261270881846126b5565b905092915050565b60006040820190506127256000830185611db3565b6127326020830184611d92565b9392505050565b600060608201905061274e6000830186611db3565b61275b6020830185611db3565b6127686040830184611d92565b949350505050565b600081519050919050565b600061278682612770565b6127908185612419565b93506127a081856020860161268b565b80840191505092915050565b60006127b8828461277b565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220691f2f486fb660bfee536754c86b7b478781b7b4e3b0ddab5cc988f74bf2b04564736f6c63430008140033";

type AdrasteiaZkPaymentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdrasteiaZkPaymentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdrasteiaZkPayment__factory extends ContractFactory {
  constructor(...args: AdrasteiaZkPaymentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      AdrasteiaZkPayment & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AdrasteiaZkPayment__factory {
    return super.connect(runner) as AdrasteiaZkPayment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdrasteiaZkPaymentInterface {
    return new Interface(_abi) as AdrasteiaZkPaymentInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AdrasteiaZkPayment {
    return new Contract(address, _abi, runner) as unknown as AdrasteiaZkPayment;
  }
}