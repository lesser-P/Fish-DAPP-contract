/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IOracleInterface extends ethers.utils.Interface {
  functions: {
    "getkey(bool,uint256,uint256,string,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getkey",
    values: [boolean, BigNumberish, BigNumberish, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "getkey", data: BytesLike): Result;

  events: {};
}

export class IOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IOracleInterface;

  functions: {
    getkey(
      marketStatus: boolean,
      _price18: BigNumberish,
      _timestamp: BigNumberish,
      _symbols: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getkey(
    marketStatus: boolean,
    _price18: BigNumberish,
    _timestamp: BigNumberish,
    _symbols: string,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getkey(
      marketStatus: boolean,
      _price18: BigNumberish,
      _timestamp: BigNumberish,
      _symbols: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getkey(
      marketStatus: boolean,
      _price18: BigNumberish,
      _timestamp: BigNumberish,
      _symbols: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getkey(
      marketStatus: boolean,
      _price18: BigNumberish,
      _timestamp: BigNumberish,
      _symbols: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}