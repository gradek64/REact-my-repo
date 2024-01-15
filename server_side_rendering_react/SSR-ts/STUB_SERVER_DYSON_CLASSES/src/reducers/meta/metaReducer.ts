import { createReducer } from "@reduxjs/toolkit";

import { GET_WALLET_SUCCESS, GET_WALLET_FAILURE } from "../../actions";
import { MetaState } from "types/reducers";

export const initialState: MetaState = {
  savedPaymentMethods: [],
  error: false,
  id: "",
  status: "IDLE",
  customerId: "22",
};

const metaReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_WALLET_SUCCESS, (state, { payload }) => {
      state.error = false;
      state.status = "IDLE";
      console.log("payload.savedPaymentMethods;", payload.savedPaymentMethods);
      state.savedPaymentMethods = payload.savedPaymentMethods;
    })
    .addCase(GET_WALLET_FAILURE, (state, { payload }) => {
      state.status = "IDLE";
      if ("status" in payload.error) {
        state.error = payload;
      }
    })
);

export default metaReducer;
