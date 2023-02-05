import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { ConnectWalletButton } from "../../../features/connectWallet";
import { WalletAddressCard } from "../../../entity/walletAddress";
import { AppLogo } from "../../../shared/ui/Logo";

const cx = classNames.bind(styles);

export const Header = () => {
  return (
    <div className={cx("header", "container")}>
      <div className={cx("wrapper")}>
        <div className={styles.logo}>
          <AppLogo />
        </div>
        {/*<ConnectWalletButton />*/}
        <WalletAddressCard />
      </div>
    </div>
  );
};
