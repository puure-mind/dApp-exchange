import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";

export const walletAccount = createSelector(
  (state: RootState) => state.wallet,
  (wallet) => wallet.walletAccount
);

export const walletShortAddress = createSelector(
  (state: RootState) => state.wallet,
  (wallet) => wallet.shortAddress
);
