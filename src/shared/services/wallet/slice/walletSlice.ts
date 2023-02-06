import { createSlice } from "@reduxjs/toolkit";
import { formatAddressToShort } from "../../../utils/web3";

const initialState = {
  walletAccount: "" as string,
  shortAddress: "" as string,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    walletConnectedSuccess: (state, action) => {
      state.walletAccount = action.payload;
      state.shortAddress = formatAddressToShort(action.payload);
    },
    disconnectWallet: (state) => {
      state.walletAccount = initialState.walletAccount;
    },
  },
});

export const { reducer, actions } = walletSlice;
