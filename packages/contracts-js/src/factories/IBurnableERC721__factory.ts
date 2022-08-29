/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IBurnableERC721,
  IBurnableERC721Interface,
} from "../IBurnableERC721";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBurnableERC721__factory {
  static readonly abi = _abi;
  static createInterface(): IBurnableERC721Interface {
    return new utils.Interface(_abi) as IBurnableERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBurnableERC721 {
    return new Contract(address, _abi, signerOrProvider) as IBurnableERC721;
  }
}