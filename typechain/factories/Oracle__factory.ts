/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Oracle, OracleInterface } from "../Oracle";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "executor",
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
        internalType: "bool",
        name: "_marketState",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_price18",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_symbols",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "getkey",
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
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_type",
        type: "bool",
      },
    ],
    name: "setExecutor",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "setSigner",
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
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setTimeLimit",
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
    name: "signer",
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
    name: "timeLimit",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f0c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063715018a611610071578063715018a6146101255780638da5cb5b1461012f578063c08d1fe514610137578063c4d66de81461014c578063e2889c821461015f578063f2fde38b14610172576100a9565b80631e1bff3f146100ae578063238ac933146100d7578063239b93b2146100ec57806348c7e528146100ff5780636c19e78314610112575b600080fd5b6100c16100bc366004610aa4565b610185565b6040516100ce9190610c3a565b60405180910390f35b6100df6101e0565b6040516100ce9190610c26565b6100c16100fa366004610ad6565b6101ef565b6100c161010d366004610a8a565b6102c9565b6100c1610120366004610a8a565b6102de565b61012d610343565b005b6100df61038e565b61013f61039d565b6040516100ce9190610e94565b61012d61015a366004610a8a565b6103a3565b6100c161016d366004610b84565b61044d565b61012d610180366004610a8a565b610497565b600061018f610508565b6001600160a01b03166101a061038e565b6001600160a01b0316146101cf5760405162461bcd60e51b81526004016101c690610e5f565b60405180910390fd5b6101d9838361050c565b9392505050565b6065546001600160a01b031681565b3360009081526067602052604081205460ff1661021e5760405162461bcd60e51b81526004016101c690610dce565b836066544261022d9190610e9d565b1061024a5760405162461bcd60e51b81526004016101c690610c9a565b856102675760405162461bcd60e51b81526004016101c690610e36565b6000868686866040516020016102809493929190610b9c565b60405160208183030381529060405280519060200120905060006102ac6102a68361053a565b8561056a565b6065546001600160a01b0391821691161498975050505050505050565b60676020526000908152604090205460ff1681565b60006102e8610508565b6001600160a01b03166102f961038e565b6001600160a01b03161461031f5760405162461bcd60e51b81526004016101c690610e5f565b50606580546001600160a01b0319166001600160a01b03831617905560015b919050565b61034b610508565b6001600160a01b031661035c61038e565b6001600160a01b0316146103825760405162461bcd60e51b81526004016101c690610e5f565b61038c600061058e565b565b6033546001600160a01b031690565b60665481565b600054610100900460ff16806103bc575060005460ff16155b6103d85760405162461bcd60e51b81526004016101c690610d80565b600054610100900460ff16158015610403576000805460ff1961ff0019909116610100171660011790555b61040b6105e0565b61041682600161050c565b50606580546001600160a01b0319166001600160a01b038416179055603c6066558015610449576000805461ff00191690555b5050565b6000610457610508565b6001600160a01b031661046861038e565b6001600160a01b03161461048e5760405162461bcd60e51b81526004016101c690610e5f565b50606655600190565b61049f610508565b6001600160a01b03166104b061038e565b6001600160a01b0316146104d65760405162461bcd60e51b81526004016101c690610e5f565b6001600160a01b0381166104fc5760405162461bcd60e51b81526004016101c690610cf8565b6105058161058e565b50565b3390565b6001600160a01b0382166000908152606760205260409020805482151560ff19909116179055600192915050565b60008160405160200161054d9190610bf5565b604051602081830303815290604052805190602001209050919050565b60008060006105798585610664565b91509150610586816106d4565b509392505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16806105f9575060005460ff16155b6106155760405162461bcd60e51b81526004016101c690610d80565b600054610100900460ff16158015610640576000805460ff1961ff0019909116610100171660011790555b610648610801565b610650610874565b8015610505576000805461ff001916905550565b60008082516041141561069b5760208301516040840151606085015160001a61068f878285856108e4565b945094505050506106cd565b8251604014156106c557602083015160408401516106ba8683836109c4565b9350935050506106cd565b506000905060025b9250929050565b60008160048111156106f657634e487b7160e01b600052602160045260246000fd5b141561070157610505565b600181600481111561072357634e487b7160e01b600052602160045260246000fd5b14156107415760405162461bcd60e51b81526004016101c690610c63565b600281600481111561076357634e487b7160e01b600052602160045260246000fd5b14156107815760405162461bcd60e51b81526004016101c690610cc1565b60038160048111156107a357634e487b7160e01b600052602160045260246000fd5b14156107c15760405162461bcd60e51b81526004016101c690610d3e565b60048160048111156107e357634e487b7160e01b600052602160045260246000fd5b14156105055760405162461bcd60e51b81526004016101c690610df4565b600054610100900460ff168061081a575060005460ff16155b6108365760405162461bcd60e51b81526004016101c690610d80565b600054610100900460ff16158015610650576000805460ff1961ff0019909116610100171660011790558015610505576000805461ff001916905550565b600054610100900460ff168061088d575060005460ff16155b6108a95760405162461bcd60e51b81526004016101c690610d80565b600054610100900460ff161580156108d4576000805460ff1961ff0019909116610100171660011790555b6106506108df610508565b61058e565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561091b57506000905060036109bb565b8460ff16601b1415801561093357508460ff16601c14155b1561094457506000905060046109bb565b6000600187878787604051600081526020016040526040516109699493929190610c45565b6020604051602081039080840390855afa15801561098b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166109b4576000600192509250506109bb565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b016109e5878288856108e4565b935093505050935093915050565b600067ffffffffffffffff80841115610a0e57610a0e610ec0565b604051601f8501601f191681016020018281118282101715610a3257610a32610ec0565b604052848152915081838501861015610a4a57600080fd5b8484602083013760006020868301015250509392505050565b80356001600160a01b038116811461033e57600080fd5b8035801515811461033e57600080fd5b600060208284031215610a9b578081fd5b6101d982610a63565b60008060408385031215610ab6578081fd5b610abf83610a63565b9150610acd60208401610a7a565b90509250929050565b600080600080600060a08688031215610aed578081fd5b610af686610a7a565b94506020860135935060408601359250606086013567ffffffffffffffff80821115610b20578283fd5b818801915088601f830112610b33578283fd5b610b42898335602085016109f3565b93506080880135915080821115610b57578283fd5b508601601f81018813610b68578182fd5b610b77888235602084016109f3565b9150509295509295909350565b600060208284031215610b95578081fd5b5035919050565b600085151560f81b82528460018301528360218301528251815b81811015610bd35760208186018101516041868401015201610bb6565b81811115610be45782604183860101525b509190910160410195945050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b6001600160a01b0391909116815260200190565b901515815260200190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b6020808252600d908201526c3a34b6b2b9ba30b6b81032b93960991b604082015260600190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252600c908201526b32bc32b1baba37b91032b93960a11b604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252600f908201526e26b0b935b2ba103737ba1037b832b760891b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b600082821015610ebb57634e487b7160e01b81526011600452602481fd5b500390565b634e487b7160e01b600052604160045260246000fdfea26469706673582212207219a06f299723e3e70deb0eecdb39c2381614f5b7d2d853cc5b68dfcf73392d64736f6c63430008000033";

export class Oracle__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Oracle> {
    return super.deploy(overrides || {}) as Promise<Oracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}
