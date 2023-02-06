import { spawn, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import Web3 from "web3";
import { walletActions } from "../index";

export function* rootSaga() {
  yield spawn(connectWalletWatcher);
}

function* connectWalletWatcher() {
  yield takeEvery(sagaActions.CONNECT_WALLET, connectWalletWorker);
}

function* connectWalletWorker() {
  const web3 = new Web3(Web3.givenProvider);
  try {
    const accounts: string = yield web3.eth.requestAccounts();
    yield put(walletActions.walletConnectedSuccess(accounts[0]));
  } catch (e) {
    console.error(e);
  }
}
