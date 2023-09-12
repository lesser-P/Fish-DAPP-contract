/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SSeaERC20, SSeaERC20Interface } from "../SSeaERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
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
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
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
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
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
    name: "LOCK_TIME",
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
    name: "_owner",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "burn",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "burnFrom",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
        name: "",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
        internalType: "uint256",
        name: "_LOCK_TIME",
        type: "uint256",
      },
    ],
    name: "setLOCK_TIME",
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
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint128",
        name: "balance",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lockedUntil",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040526201518060015534801561001757600080fd5b506040516200186338038062001863833981016040819052610038916100c8565b4660a081905261004781610074565b6080525060601b6001600160601b03191660c05260028054336001600160a01b0319909116179055610115565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921882306040516020016100ab939291906100f6565b604051602081830303815290604052805190602001209050919050565b6000602082840312156100d9578081fd5b81516001600160a01b03811681146100ef578182fd5b9392505050565b92835260208301919091526001600160a01b0316604082015260600190565b60805160a05160c05160601c61170a62000159600039806104ad52806105dd52806109095280610cba5280610dae525080610bb5525080610bea525061170a6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80639dc29fac116100b8578063d505accf1161007c578063d505accf14610277578063dd62ed3e1461028c578063e3f0dfe71461029f578063ec60bcf3146102b2578063f2fde38b146102c5578063fc0c546a146102d857610142565b80639dc29fac14610215578063a0712d6814610228578063a87430ba1461023b578063a9059cbb1461025c578063b2bdfa7b1461026f57610142565b80633644e5151161010a5780633644e515146101c2578063413d9c3a146101ca57806370a08231146101d25780637ecebe00146101e55780638da5cb5b146101f857806395d89b411461020d57610142565b806306fdde0314610147578063095ea7b31461016557806318160ddd1461018557806323b872dd1461019a578063313ce567146101ad575b600080fd5b61014f6102e0565b60405161015c91906113eb565b60405180910390f35b610178610173366004611258565b61030d565b60405161015c9190611366565b61018d610378565b60405161015c9190611371565b6101786101a83660046111a5565b61037e565b6101b561039f565b60405161015c9190611681565b61018d6103a4565b61018d6103b3565b61018d6101e036600461114f565b6103b9565b61018d6101f336600461114f565b6103dd565b6102006103ef565b60405161015c9190611315565b61014f6103fe565b610178610223366004611258565b61041e565b6101786102363660046112a2565b610434565b61024e61024936600461114f565b610655565b60405161015c929190611667565b61017861026a366004611258565b61067b565b610200610688565b61028a6102853660046111e5565b610697565b005b61018d61029a366004611171565b610838565b6101786102ad3660046112a2565b610855565b6101786102c03660046111a5565b61088f565b61028a6102d336600461114f565b6108a6565b610200610907565b604051806040016040528060118152602001705374616b65642053454120546f6b656e7360781b81525081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610366908690611371565b60405180910390a35060015b92915050565b60005481565b600061038a848361092b565b6103958484846109bd565b5060019392505050565b601281565b60006103ae610bb0565b905090565b60015481565b6001600160a01b03166000908152600360205260409020546001600160801b031690565b60056020526000908152604090205481565b6002546001600160a01b031690565b604051806040016040528060048152602001637353454160e01b81525081565b600061042b338484610c10565b50600192915050565b60003361045c5760405162461bcd60e51b815260040161045390611536565b60405180910390fd5b610464611121565b503360009081526003602090815260408083208151808301835290546001600160801b038082168352600160801b9091041692810192909252516370a0823160e01b81529091907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a08231906104ea903090600401611315565b60206040518083038186803b15801561050257600080fd5b505afa158015610516573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053a91906112ba565b90506000805460001461055a578160005486028161055457fe5b0461055c565b845b905061056781610e28565b8351016001600160801b03168352600154610583904201610e28565b6001600160801b0390811660208086019182523360008181526003909252604082208751815494518616600160801b029086166001600160801b031990951694909417909416929092179092558154830190915561060d907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316903088610e55565b60405133906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610642908590611371565b60405180910390a3506001949350505050565b6003602052600090815260409020546001600160801b0380821691600160801b90041682565b600061042b3384846109bd565b6002546001600160a01b031681565b6001600160a01b0387166106bd5760405162461bcd60e51b815260040161045390611622565b8342106106dc5760405162461bcd60e51b815260040161045390611646565b6001600160a01b038716600081815260056020908152604091829020805460018181019092559251909261075a9261073f927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928e928e928e92918e910161137a565b60405160208183030381529060405280519060200120610f4e565b8585856040516000815260200160405260405161077a94939291906113cd565b6020604051602081039080840390855afa15801561079c573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146107cc5760405162461bcd60e51b8152600401610453906115c8565b6001600160a01b038088166000818152600460209081526040808320948b168084529490915290819020889055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610827908990611371565b60405180910390a350505050505050565b600460209081526000928352604080842090915290825290205481565b6000336108606103ef565b6001600160a01b0316146108865760405162461bcd60e51b815260040161045390611593565b50600190815590565b600061089b848361092b565b610395848484610c10565b336108af6103ef565b6001600160a01b0316146108d55760405162461bcd60e51b815260040161045390611593565b6001600160a01b0381166108fb5760405162461bcd60e51b8152600401610453906114a4565b61090481610fa3565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b0383161415610941576109b9565b6001600160a01b038216600090815260046020908152604080832033845290915290205460001981146109b7578181101561098e5760405162461bcd60e51b8152600401610453906114ea565b6001600160a01b0383166000908152600460209081526040808320338452909152902082820390555b505b5050565b6109c5611121565b506001600160a01b0383166000908152600360209081526040918290208251808401909352546001600160801b038082168452600160801b90910416908201819052421015610a265760405162461bcd60e51b81526004016104539061144d565b8115610b5f5780516001600160801b0316821115610a565760405162461bcd60e51b815260040161045390611511565b826001600160a01b0316846001600160a01b031614610b5f576001600160a01b038316610a955760405162461bcd60e51b815260040161045390611536565b610a9d611121565b506001600160a01b0383166000908152600360209081526040918290208251808401909352546001600160801b038082168452600160801b9091041690820152610ae683610e28565b82516001600160a01b038716600090815260036020526040902080546001600160801b031916929091036001600160801b0316919091179055610b2883610e28565b90516001600160a01b038516600090815260036020526040902080546001600160801b031916919092016001600160801b03161790555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ba29190611371565b60405180910390a350505050565b6000467f00000000000000000000000000000000000000000000000000000000000000008114610be857610be381610fc5565b610c0a565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b6001600160a01b038216610c365760405162461bcd60e51b815260040161045390611536565b610c3e611121565b506001600160a01b0383166000908152600360209081526040918290208251808401909352546001600160801b038082168452600160801b90910416908201819052421015610c9f5760405162461bcd60e51b81526004016104539061144d565b600080546040516370a0823160e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610cef903090600401611315565b60206040518083038186803b158015610d0757600080fd5b505afa158015610d1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3f91906112ba565b840281610d4857fe5b049050610d68610d5784610e28565b83516001600160801b031690610ffc565b6001600160a01b03868116600090815260036020526040812080546001600160801b0319166001600160801b0394909416939093179092558154859003909155610dd5907f000000000000000000000000000000000000000000000000000000000000000016858361102b565b60006001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610e199190611371565b60405180910390a35050505050565b60006001600160801b03821115610e515760405162461bcd60e51b81526004016104539061155c565b5090565b60006060856001600160a01b03166323b872dd60e01b868686604051602401610e8093929190611329565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610ebe91906112d2565b6000604051808303816000865af19150503d8060008114610efb576040519150601f19603f3d011682016040523d82523d6000602084013e610f00565b606091505b5091509150818015610f2a575080511580610f2a575080806020019051810190610f2a9190611282565b610f465760405162461bcd60e51b8152600401610453906115ed565b505050505050565b600060405180604001604052806002815260200161190160f01b815250610f73610bb0565b83604051602001610f86939291906112ee565b604051602081830303815290604052805190602001209050919050565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692188230604051602001610f86939291906113ae565b8082036001600160801b0380841690821611156103725760405162461bcd60e51b81526004016104539061141e565b60006060846001600160a01b031663a9059cbb60e01b858560405160240161105492919061134d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161109291906112d2565b6000604051808303816000865af19150503d80600081146110cf576040519150601f19603f3d011682016040523d82523d6000602084013e6110d4565b606091505b50915091508180156110fe5750805115806110fe5750808060200190518101906110fe9190611282565b61111a5760405162461bcd60e51b81526004016104539061146d565b5050505050565b604080518082019091526000808252602082015290565b80356001600160a01b038116811461037257600080fd5b600060208284031215611160578081fd5b61116a8383611138565b9392505050565b60008060408385031215611183578081fd5b61118d8484611138565b915061119c8460208501611138565b90509250929050565b6000806000606084860312156111b9578081fd5b83356111c4816116bf565b925060208401356111d4816116bf565b929592945050506040919091013590565b600080600080600080600060e0888a0312156111ff578283fd5b6112098989611138565b96506112188960208a01611138565b95506040880135945060608801359350608088013560ff8116811461123b578384fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561126a578182fd5b6112748484611138565b946020939093013593505050565b600060208284031215611293578081fd5b8151801515811461116a578182fd5b6000602082840312156112b3578081fd5b5035919050565b6000602082840312156112cb578081fd5b5051919050565b600082516112e481846020870161168f565b9190910192915050565b6000845161130081846020890161168f565b91909101928352506020820152604001919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b92835260208301919091526001600160a01b0316604082015260600190565b93845260ff9290921660208401526040830152606082015260800190565b600060208252825180602084015261140a81604085016020870161168f565b601f01601f19169190910160400192915050565b602080825260159082015274426f72696e674d6174683a20556e646572666c6f7760581b604082015260600190565b602080825260069082015265131bd8dad95960d21b604082015260600190565b6020808252601c908201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252600d908201526c4c6f7720616c6c6f77616e636560981b604082015260600190565b6020808252600b908201526a4c6f772062616c616e636560a81b604082015260600190565b6020808252600c908201526b5a65726f206164647265737360a01b604082015260600190565b6020808252601c908201527f426f72696e674d6174683a2075696e74313238204f766572666c6f7700000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600b908201526a496e76616c69642053696760a81b604082015260600190565b6020808252818101527f426f72696e6745524332303a205472616e7366657246726f6d206661696c6564604082015260600190565b6020808252600a90820152692d32b9379037bbb732b960b11b604082015260600190565b602080825260079082015266115e1c1a5c995960ca1b604082015260600190565b6001600160801b0392831681529116602082015260400190565b60ff91909116815260200190565b60005b838110156116aa578181015183820152602001611692565b838111156116b9576000848401525b50505050565b6001600160a01b038116811461090457600080fdfea2646970667358221220fde1ca62bee4d91f164d7fc0a0cd561d5f077702fd6d8467abb1a8f5162d8a5664736f6c634300060c0033";

export class SSeaERC20__factory extends ContractFactory {
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
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SSeaERC20> {
    return super.deploy(_token, overrides || {}) as Promise<SSeaERC20>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): SSeaERC20 {
    return super.attach(address) as SSeaERC20;
  }
  connect(signer: Signer): SSeaERC20__factory {
    return super.connect(signer) as SSeaERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SSeaERC20Interface {
    return new utils.Interface(_abi) as SSeaERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SSeaERC20 {
    return new Contract(address, _abi, signerOrProvider) as SSeaERC20;
  }
}
