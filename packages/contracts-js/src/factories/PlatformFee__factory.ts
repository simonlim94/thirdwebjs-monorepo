/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PlatformFee, PlatformFeeInterface } from "../PlatformFee";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "platformFeeRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformFeeBps",
        type: "uint256",
      },
    ],
    name: "PlatformFeeInfoUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "getPlatformFeeInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_platformFeeRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_platformFeeBps",
        type: "uint256",
      },
    ],
    name: "setPlatformFeeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class PlatformFee__factory {
  static readonly abi = _abi;
  static createInterface(): PlatformFeeInterface {
    return new utils.Interface(_abi) as PlatformFeeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlatformFee {
    return new Contract(address, _abi, signerOrProvider) as PlatformFee;
  }
}