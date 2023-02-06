import styles from "./WalletAddress.module.scss";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks";
import { walletActions } from "../../../shared/services/wallet";
import { walletShortAddress } from "../../../shared/services/wallet/selectors";

interface Props {}

export const WalletAddress = ({}: Props) => {
  const dispatch = useAppDispatch();
  const address = useAppSelector(walletShortAddress);

  const disconnectHandler = () => {
    dispatch(walletActions.disconnectWallet());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mm}>
        <img src={"mm.png"} />
      </div>
      <div className={styles.address}>
        <span>{address}</span>
      </div>
      <div className={styles.connect} onClick={disconnectHandler}>
        <img src={"connected.png"} />
      </div>
    </div>
  );
};
