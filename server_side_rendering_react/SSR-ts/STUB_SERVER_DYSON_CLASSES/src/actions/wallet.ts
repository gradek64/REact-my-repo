import { createAction } from "@reduxjs/toolkit";
import { GetWalletAPIPayload } from "types/api";
import { GetWalletAPIPayloadFailure } from "types/api/account/wallet";

export const GET_WALLET_SUCCESS =
  createAction<GetWalletAPIPayload>("GET_WALLET_SUCCESS");
export const GET_WALLET_FAILURE =
  createAction<GetWalletAPIPayloadFailure>("GET_WALLET_FAILURE");
