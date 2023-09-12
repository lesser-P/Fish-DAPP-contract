/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOracle, IOracleInterface } from "../IOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "marketStatus",
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
];

export class IOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleInterface {
    return new utils.Interface(_abi) as IOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracle {
    return new Contract(address, _abi, signerOrProvider) as IOracle;
  }
}
