import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { ConnectWalletButton } from "../../../features/connectWallet";
import { WalletAddressCard } from "../../../entity/walletAddress";
import { AppLogo } from "../../../shared/ui/Logo";
import { useAppSelector } from "../../../shared/utils/hooks";
import { walletAccount } from "../../../shared/services/wallet";

const cx = classNames.bind(styles);

export const Header = () => {
  const wallet = useAppSelector(walletAccount);

  return (
    <div className={cx("header", "container")}>
      <div className={cx("wrapper")}>
        <div className={styles.logo}>
          <AppLogo />
        </div>
        {wallet ? <WalletAddressCard /> : <ConnectWalletButton />}
      </div>
    </div>
  );
};
