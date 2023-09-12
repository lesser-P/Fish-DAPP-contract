/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TWAPOracleUpdater,
  TWAPOracleUpdaterInterface,
} from "../TWAPOracleUpdater";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        internalType: "uint256",
        name: "previousTWAPEpochPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTWAPEpochPeriod",
        type: "uint256",
      },
    ],
    name: "TWAPEpochChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousTWAPOracle",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newTWAPOracle",
        type: "address",
      },
    ],
    name: "TWAPOracleChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newTWAPSource",
        type: "address",
      },
    ],
    name: "TWAPSourceAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "removedTWAPSource",
        type: "address",
      },
    ],
    name: "TWAPSourceRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newTWAPSourceDexPool_",
        type: "address",
      },
    ],
    name: "addTWAPSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "newTWAPEpochPeriod_",
        type: "uint256",
      },
    ],
    name: "changeTWAPEpochPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newTWAPOracle_",
        type: "address",
      },
    ],
    name: "changeTWAPOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "twapSourceToRemove_",
        type: "address",
      },
    ],
    name: "removeTWAPSource",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "vault_",
        type: "address",
      },
    ],
    name: "setVault",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
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
    name: "twapEpochPeriod",
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
    name: "twapOracle",
    outputs: [
      {
        internalType: "contract ITWAPOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b5338038062001b53833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084918491620001c0916003919086019062000384565b508151620001d690600490602085019062000384565b506005805460ff191660ff92909216919091179055504690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200021a620002ea565b805160209182012060408051808201825260018152603160f81b90840152805180840194909452838101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606084015260808301939093523060a0808401919091528351808403909101815260c0909201928390528151910120600755600880546001600160a01b0319163317908190556001600160a01b0316906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350505062000430565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156200037a5780601f106200034e576101008083540402835291602001916200037a565b820191906000526020600020905b8154815290600101906020018083116200035c57829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003bc576000855562000407565b82601f10620003d757805160ff191683800117855562000407565b8280016001018555821562000407579182015b8281111562000407578251825591602001919060010190620003ea565b506200041592915062000419565b5090565b5b808211156200041557600081556001016200041a565b61171380620004406000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80637ecebe00116100de578063c18230ec11610097578063dd62ed3e11610071578063dd62ed3e146104c4578063efa058b1146104f2578063f2fde38b14610518578063fbfa77cf1461053e5761018e565b8063c18230ec14610445578063c5bc70021461046b578063d505accf146104735761018e565b80637ecebe00146103935780638da5cb5b146103b95780639043292a146103dd57806395d89b41146103e5578063a457c2d7146103ed578063a9059cbb146104195761018e565b80633144fdf61161014b5780634daff8a3116101255780634daff8a3146103225780636817031b1461033f57806370a0823114610365578063715018a61461038b5761018e565b80633144fdf6146102c65780633644e515146102ee57806339509351146102f65761018e565b806306fdde0314610193578063095ea7b31461021057806318160ddd1461025057806323b872dd1461026a57806330adf81f146102a0578063313ce567146102a8575b600080fd5b61019b610546565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d55781810151838201526020016101bd565b50505050905090810190601f1680156102025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023c6004803603604081101561022657600080fd5b506001600160a01b0381351690602001356105dc565b604080519115158252519081900360200190f35b6102586105f3565b60408051918252519081900360200190f35b61023c6004803603606081101561028057600080fd5b506001600160a01b038135811691602081013590911690604001356105f9565b610258610662565b6102b0610686565b6040805160ff9092168252519081900360200190f35b6102ec600480360360208110156102dc57600080fd5b50356001600160a01b031661068f565b005b610258610738565b61023c6004803603604081101561030c57600080fd5b506001600160a01b03813516906020013561073e565b6102ec6004803603602081101561033857600080fd5b5035610774565b61023c6004803603602081101561035557600080fd5b50356001600160a01b0316610842565b6102586004803603602081101561037b57600080fd5b50356001600160a01b03166108b7565b6102ec6108d2565b610258600480360360208110156103a957600080fd5b50356001600160a01b0316610969565b6103c161098a565b604080516001600160a01b039092168252519081900360200190f35b6103c1610999565b61019b6109a8565b61023c6004803603604081101561040357600080fd5b506001600160a01b038135169060200135610a09565b61023c6004803603604081101561042f57600080fd5b506001600160a01b038135169060200135610a58565b6102ec6004803603602081101561045b57600080fd5b50356001600160a01b0316610a65565b610258610b2f565b6102ec600480360360e081101561048957600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610b35565b610258600480360360408110156104da57600080fd5b506001600160a01b0381358116916020013516610d62565b6102ec6004803603602081101561050857600080fd5b50356001600160a01b0316610d8d565b6102ec6004803603602081101561052e57600080fd5b50356001600160a01b0316610e57565b6103c1610f45565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d25780601f106105a7576101008083540402835291602001916105d2565b820191906000526020600020905b8154815290600101906020018083116105b557829003601f168201915b5050505050905090565b60006105e9338484610f54565b5060015b92915050565b60025490565b6000610606848484611040565b610658843361065385604051806060016040528060288152602001611628602891396001600160a01b038a166000908152600160209081526040808320338452909152902054919061119b565b610f54565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60055460ff1690565b6008546001600160a01b031633146106dc576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b600c546040516001600160a01b038084169216907f04d449efb9af82ca8fd89ca047e3c023180cac06245c5ace8ecf96c7f637c00a90600090a3600c80546001600160a01b0319166001600160a01b0392909216919091179055565b60075481565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916105e99185906106539086611232565b6008546001600160a01b031633146107c1576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b600081116108005760405162461bcd60e51b815260040180806020018281038252603c81526020018061157a603c913960400191505060405180910390fd5b600d54604080519182526020820183905280517fcddeab46bd7c7fa32f59b80523bce21904a7f2031ac8fbefa3f9c2ba24cc0e9f9281900390910190a1600d55565b6008546000906001600160a01b03163314610892576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b50600980546001600160a01b0383166001600160a01b03199091161790556001919050565b6001600160a01b031660009081526020819052604090205490565b6008546001600160a01b0316331461091f576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b6008546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600880546001600160a01b0319169055565b6001600160a01b03811660009081526006602052604081206105ed90611293565b6008546001600160a01b031690565b600c546001600160a01b031681565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d25780601f106105a7576101008083540402835291602001916105d2565b60006105e93384610653856040518060600160405280602581526020016116b9602591393360009081526001602090815260408083206001600160a01b038d168452909152902054919061119b565b60006105e9338484611040565b6008546001600160a01b03163314610ab2576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b610abd600a82611297565b610af85760405162461bcd60e51b815260040180806020018281038252602e815260200180611504602e913960400191505060405180910390fd5b6040516001600160a01b038216907fb702ce677d2c4388aab38b10f96ca003dbe3dadb46fbf858cb7d55cba6bebc4690600090a250565b600d5481565b83421115610b8a576040805162461bcd60e51b815260206004820152601860248201527f5065726d69743a206578706972656420646561646c696e650000000000000000604482015290519081900360640190fd5b6001600160a01b03871660009081526006602052604081207f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c990899089908990610bd390611293565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e08201835280519084012060075461190160f01b610100840152610102830152610122808301829052835180840390910181526101428301808552815191860191909120600091829052610162840180865281905260ff8a166101828501526101a284018990526101c28401889052935191955092936001926101e280820193601f1981019281900390910190855afa158015610cb9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610cef5750896001600160a01b0316816001600160a01b0316145b610d2a5760405162461bcd60e51b81526004018080602001828103825260218152602001806116076021913960400191505060405180910390fd5b6001600160a01b038a166000908152600660205260409020610d4b906112ac565b610d568a8a8a610f54565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6008546001600160a01b03163314610dda576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b610de5600a826112b5565b610e205760405162461bcd60e51b815260040180806020018281038252602b8152602001806115b6602b913960400191505060405180910390fd5b6040516001600160a01b038216907f677b09947a451559cdf8756f4cb518daf9620feb88ad8f3434a77f4cbfc73bc990600090a250565b6008546001600160a01b03163314610ea4576040805162461bcd60e51b81526020600482018190526024820152600080516020611650833981519152604482015290519081900360640190fd5b6001600160a01b038116610ee95760405162461bcd60e51b81526004018080602001828103825260268152602001806115326026913960400191505060405180910390fd5b6008546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600880546001600160a01b0319166001600160a01b0392909216919091179055565b6009546001600160a01b031690565b6001600160a01b038316610f995760405162461bcd60e51b81526004018080602001828103825260248152602001806116956024913960400191505060405180910390fd5b6001600160a01b038216610fde5760405162461bcd60e51b81526004018080602001828103825260228152602001806115586022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166110855760405162461bcd60e51b81526004018080602001828103825260258152602001806116706025913960400191505060405180910390fd5b6001600160a01b0382166110ca5760405162461bcd60e51b81526004018080602001828103825260238152602001806114e16023913960400191505060405180910390fd5b6110d58383836112ca565b611112816040518060600160405280602681526020016115e1602691396001600160a01b038616600090815260208190526040902054919061119b565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546111419082611232565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561122a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156111ef5781810151838201526020016111d7565b50505050905090810190601f16801561121c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561128c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b5490565b600061128c836001600160a01b03841661130c565b80546001019055565b600061128c836001600160a01b038416611356565b6112d5600a8461141c565b156112eb576112e683600d54611431565b611307565b6112f6600a8361141c565b156113075761130782600d54611431565b505050565b600061131883836114c8565b61134e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105ed565b5060006105ed565b60008181526001830160205260408120548015611412578354600019808301919081019060009087908390811061138957fe5b90600052602060002001549050808760000184815481106113a657fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806113d657fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506105ed565b60009150506105ed565b600061128c836001600160a01b0384166114c8565b61143c600a8361141c565b156114c457600c54604080516377a8d4c160e11b81526001600160a01b038581166004830152602482018590529151919092169163ef51a9829160448083019260209291908290030181600087803b15801561149757600080fd5b505af11580156114ab573d6000803e3d6000fd5b505050506040513d60208110156114c157600080fd5b50505b5050565b6000908152600191909101602052604090205415159056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f6c796d7075734552433230544f6b656e3a205457415020536f7572636520616c72656164792073746f7265642e4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373545741504f7261636c65557064617465723a20545741502045706f636820706572696f64206d7573742062652067726561746572207468616e20302e4f6c796d7075734552433230544f6b656e3a205457415020736f75726365206e6f742070726573656e742e45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655a65726f537761705065726d69743a20496e76616c6964207369676e617475726545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220fa684251a6e741167c9c2ad36c7214ca461d9e56f5eed404cb39e0a4b95eef6f64736f6c63430007050033";

export class TWAPOracleUpdater__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TWAPOracleUpdater> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<TWAPOracleUpdater>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): TWAPOracleUpdater {
    return super.attach(address) as TWAPOracleUpdater;
  }
  connect(signer: Signer): TWAPOracleUpdater__factory {
    return super.connect(signer) as TWAPOracleUpdater__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TWAPOracleUpdaterInterface {
    return new utils.Interface(_abi) as TWAPOracleUpdaterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TWAPOracleUpdater {
    return new Contract(address, _abi, signerOrProvider) as TWAPOracleUpdater;
  }
}
