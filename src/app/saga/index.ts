import { walletSaga } from "../../shared/services/wallet";
import { spawn } from "redux-saga/effects";

export function* rootSaga() {
  yield spawn(walletSaga.rootSaga);
}
