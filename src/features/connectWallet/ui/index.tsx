import { Button } from "../../../shared/ui";
import { walletSaga } from "../../../shared/services/wallet";
import { useAppDispatch } from "../../../shared/utils/hooks";

export const ConnectWallet = () => {
  const dispatch = useAppDispatch();

  const connect = () => {
    dispatch(walletSaga.actionCreators.connectWalletAC());
  };

  return (
    <Button
      text={"Connect Wallet"}
      sx={{ width: "200px", height: "50px" }}
      onClick={connect}
    />
  );
};
