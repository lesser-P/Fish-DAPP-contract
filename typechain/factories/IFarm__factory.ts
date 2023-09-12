/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFarm, IFarmInterface } from "../IFarm";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "setPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFarm__factory {
  static readonly abi = _abi;
  static createInterface(): IFarmInterface {
    return new utils.Interface(_abi) as IFarmInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IFarm {
    return new Contract(address, _abi, signerOrProvider) as IFarm;
  }
}