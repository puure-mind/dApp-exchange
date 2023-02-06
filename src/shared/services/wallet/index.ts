import { connectWalletAC } from "./saga/sagaActions";
import { rootSaga } from "./saga/index";

export {
  reducer as walletReducer,
  actions as walletActions,
} from "./slice/walletSlice";

export { walletAccount } from "./selectors";

export const walletSaga = {
  rootSaga,
  actionCreators: {
    connectWalletAC,
  },
};
