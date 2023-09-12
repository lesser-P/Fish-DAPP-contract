/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Stabilizer, StabilizerInterface } from "../Stabilizer";

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
    inputs: [],
    name: "goStabilizer",
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
        name: "_usdc_usc_lpAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usc",
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
    name: "openBuy",
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
    inputs: [],
    name: "openSell",
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
        internalType: "bool",
        name: "_type",
        type: "bool",
      },
    ],
    name: "setOpenBuy",
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
        internalType: "bool",
        name: "_type",
        type: "bool",
      },
    ],
    name: "setOpenSell",
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
    name: "usc",
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
    name: "usdc",
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
    name: "usdc_usc_lpAddress",
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
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256",
      },
    ],
    name: "withdrawalERC20",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506116e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063796c7be711610097578063c0c53b8b11610066578063c0c53b8b146101ae578063d4a67930146101c1578063f1eae64a146101c9578063f2fde38b146101d1576100f5565b8063796c7be7146101835780637e6f7a091461018b5780638da5cb5b14610193578063930ed0331461019b576100f5565b80633c03b9a4116100d35780633c03b9a41461014b5780633e413bee1461015e57806348c7e52814610166578063715018a614610179576100f5565b80631e1bff3f146100fa57806329e9a524146101235780633011d3d514610136575b600080fd5b61010d610108366004611110565b6101e4565b60405161011a919061129c565b60405180910390f35b61010d610131366004611173565b61025d565b61013e6102be565b60405161011a919061126f565b61010d610159366004611173565b6102cd565b61013e61032f565b61010d61017436600461108e565b61033e565b610181610353565b005b61010d61039e565b61013e610a5c565b61013e610a6b565b61010d6101a9366004611148565b610a7a565b6101816101bc3660046110c6565b610ad8565b61010d610baf565b61010d610bbf565b6101816101df36600461108e565b610bcf565b60006101ee610c40565b6001600160a01b03166101ff610a6b565b6001600160a01b03161461022e5760405162461bcd60e51b8152600401610225906113d8565b60405180910390fd5b506001600160a01b0382166000908152606560205260409020805482151560ff19909116179055600192915050565b6000610267610c40565b6001600160a01b0316610278610a6b565b6001600160a01b03161461029e5760405162461bcd60e51b8152600401610225906113d8565b506068805460ff60a01b1916600160a01b8315150217905560015b919050565b6068546001600160a01b031681565b60006102d7610c40565b6001600160a01b03166102e8610a6b565b6001600160a01b03161461030e5760405162461bcd60e51b8152600401610225906113d8565b5060688054821515600160a81b0260ff60a81b199091161790556001919050565b6067546001600160a01b031681565b60656020526000908152604090205460ff1681565b61035b610c40565b6001600160a01b031661036c610a6b565b6001600160a01b0316146103925760405162461bcd60e51b8152600401610225906113d8565b61039c6000610c44565b565b3360009081526065602052604081205460ff166103cd5760405162461bcd60e51b815260040161022590611300565b600080606660009054906101000a90046001600160a01b03166001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561041e57600080fd5b505afa158015610432573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045691906111ab565b506001600160701b031691506001600160701b031691506000606660009054906101000a90046001600160a01b03166001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156104bd57600080fd5b505afa1580156104d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f591906110aa565b60685490915060009081906001600160a01b0380851691161461051957848461051c565b83855b6067546066546040516370a0823160e01b81529395509193506000926001600160a01b03918216926370a08231926105599291169060040161126f565b60206040518083038186803b15801561057157600080fd5b505afa158015610585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a991906111ee565b6068546066546040516370a0823160e01b81529293506000926001600160a01b03928316926370a08231926105e39291169060040161126f565b60206040518083038186803b1580156105fb57600080fd5b505afa15801561060f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063391906111ee565b90506000606760009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561068557600080fd5b505afa158015610699573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bd9190611206565b60ff169050600060128210156106db576106d8826012611630565b90505b6106e681600a611543565b6106f09085611611565b935060006107108461070a87670de0b6b3a7640000610c96565b90610ca9565b9050670de0b6b3a7640000811180156107325750606854600160a81b900460ff165b1561089f576000610748600261070a8888610cb5565b6068546040516340c10f1960e01b81529192506001600160a01b0316906340c10f199061077b9030908590600401611283565b602060405180830381600087803b15801561079557600080fd5b505af11580156107a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cd919061118f565b506066546068546107eb916001600160a01b03918216911683610cc1565b60006107f882898b610d1c565b60685490915060009081906001600160a01b038d811691161461081d57826000610821565b6000835b6066546040805160008152602081019182905263022c0d9f60e01b9091529294509092506001600160a01b03169063022c0d9f90610868908590859030906024810161148e565b600060405180830381600087803b15801561088257600080fd5b505af1158015610896573d6000803e3d6000fd5b50505050505050505b670de0b6b3a7640000811080156108bf5750606854600160a01b900460ff165b15610a4b5760006108d5600261070a8789610cb5565b6067546040516370a0823160e01b81529192506000916001600160a01b03909116906370a082319061090b90309060040161126f565b60206040518083038186803b15801561092357600080fd5b505afa158015610937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095b91906111ee565b905060008183111561096e575080610971565b50815b8015610a4757606654606754610994916001600160a01b03918216911683610cc1565b60006109a1828c8c610d1c565b60675490915060009081906001600160a01b038f81169116146109c6578260006109ca565b6000835b6066546040805160008152602081019182905263022c0d9f60e01b9091529294509092506001600160a01b03169063022c0d9f90610a11908590859030906024810161148e565b600060405180830381600087803b158015610a2b57600080fd5b505af1158015610a3f573d6000803e3d6000fd5b505050505050505b5050505b60019a505050505050505050505090565b6066546001600160a01b031681565b6033546001600160a01b031690565b6000610a84610c40565b6001600160a01b0316610a95610a6b565b6001600160a01b031614610abb5760405162461bcd60e51b8152600401610225906113d8565b610acf6001600160a01b0384163384610cc1565b50600192915050565b600054610100900460ff1680610af1575060005460ff16155b610b0d5760405162461bcd60e51b81526004016102259061138a565b600054610100900460ff16158015610b38576000805460ff1961ff0019909116610100171660011790555b610b40610d6a565b606680546001600160a01b038087166001600160a01b031992831617909255606780548684169083161790556068805460ff60a81b1960ff60a01b19948716919093161792909216600160a01b1716600160a81b1790558015610ba9576000805461ff00191690555b50505050565b606854600160a01b900460ff1681565b606854600160a81b900460ff1681565b610bd7610c40565b6001600160a01b0316610be8610a6b565b6001600160a01b031614610c0e5760405162461bcd60e51b8152600401610225906113d8565b6001600160a01b038116610c345760405162461bcd60e51b8152600401610225906112ba565b610c3d81610c44565b50565b3390565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610ca28284611611565b9392505050565b6000610ca282846114dd565b6000610ca28284611630565b610d178363a9059cbb60e01b8484604051602401610ce0929190611283565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610dee565b505050565b600080610d2b856126f2610c96565b90506000610d398285610c96565b90506000610d5383610d4d88612710610c96565b90610e7d565b9050610d5f81836114dd565b979650505050505050565b600054610100900460ff1680610d83575060005460ff16155b610d9f5760405162461bcd60e51b81526004016102259061138a565b600054610100900460ff16158015610dca576000805460ff1961ff0019909116610100171660011790555b610dd2610e89565b610dda610efc565b8015610c3d576000805461ff001916905550565b6000610e43826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f6c9092919063ffffffff16565b805190915015610d175780806020019051810190610e61919061118f565b610d175760405162461bcd60e51b815260040161022590611444565b6000610ca282846114c5565b600054610100900460ff1680610ea2575060005460ff16155b610ebe5760405162461bcd60e51b81526004016102259061138a565b600054610100900460ff16158015610dda576000805460ff1961ff0019909116610100171660011790558015610c3d576000805461ff001916905550565b600054610100900460ff1680610f15575060005460ff16155b610f315760405162461bcd60e51b81526004016102259061138a565b600054610100900460ff16158015610f5c576000805460ff1961ff0019909116610100171660011790555b610dda610f67610c40565b610c44565b6060610f7b8484600085610f83565b949350505050565b606082471015610fa55760405162461bcd60e51b815260040161022590611344565b610fae85611038565b610fca5760405162461bcd60e51b81526004016102259061140d565b600080866001600160a01b03168587604051610fe69190611253565b60006040518083038185875af1925050503d8060008114611023576040519150601f19603f3d011682016040523d82523d6000602084013e611028565b606091505b5091509150610d5f82828661103e565b3b151590565b6060831561104d575081610ca2565b82511561105d5782518084602001fd5b8160405162461bcd60e51b815260040161022591906112a7565b80516001600160701b03811681146102b957600080fd5b60006020828403121561109f578081fd5b8135610ca281611689565b6000602082840312156110bb578081fd5b8151610ca281611689565b6000806000606084860312156110da578182fd5b83356110e581611689565b925060208401356110f581611689565b9150604084013561110581611689565b809150509250925092565b60008060408385031215611122578182fd5b823561112d81611689565b9150602083013561113d8161169e565b809150509250929050565b6000806040838503121561115a578182fd5b823561116581611689565b946020939093013593505050565b600060208284031215611184578081fd5b8135610ca28161169e565b6000602082840312156111a0578081fd5b8151610ca28161169e565b6000806000606084860312156111bf578283fd5b6111c884611077565b92506111d660208501611077565b9150604084015163ffffffff81168114611105578182fd5b6000602082840312156111ff578081fd5b5051919050565b600060208284031215611217578081fd5b815160ff81168114610ca2578182fd5b6000815180845261123f816020860160208601611647565b601f01601f19169290920160200192915050565b60008251611265818460208701611647565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b600060208252610ca26020830184611227565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526024908201527f6578656375746f723a2063616c6c6572206973206e6f742074686520657865636040820152633aba37b960e11b606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b600085825284602083015260018060a01b0384166040830152608060608301526114bb6080830184611227565b9695505050505050565b600082198211156114d8576114d8611673565b500190565b6000826114f857634e487b7160e01b81526012600452602481fd5b500490565b80825b600180861161150f575061153a565b81870482111561152157611521611673565b8086161561152e57918102915b9490941c938002611500565b94509492505050565b6000610ca2600019848460008261155c57506001610ca2565b8161156957506000610ca2565b816001811461157f5760028114611589576115b6565b6001915050610ca2565b60ff84111561159a5761159a611673565b6001841b9150848211156115b0576115b0611673565b50610ca2565b5060208310610133831016604e8410600b84101617156115e9575081810a838111156115e4576115e4611673565b610ca2565b6115f684848460016114fd565b80860482111561160857611608611673565b02949350505050565b600081600019048311821515161561162b5761162b611673565b500290565b60008282101561164257611642611673565b500390565b60005b8381101561166257818101518382015260200161164a565b83811115610ba95750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610c3d57600080fd5b8015158114610c3d57600080fdfea2646970667358221220e3a53faba6cdac548d44645dc36eb7582c20773ee3aacb26228165b8e0793db764736f6c63430008000033";

export class Stabilizer__factory extends ContractFactory {
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
  ): Promise<Stabilizer> {
    return super.deploy(overrides || {}) as Promise<Stabilizer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Stabilizer {
    return super.attach(address) as Stabilizer;
  }
  connect(signer: Signer): Stabilizer__factory {
    return super.connect(signer) as Stabilizer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StabilizerInterface {
    return new utils.Interface(_abi) as StabilizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Stabilizer {
    return new Contract(address, _abi, signerOrProvider) as Stabilizer;
  }
}
