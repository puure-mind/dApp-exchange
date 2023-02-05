import styles from "./WalletAddress.module.scss";

interface Props {}

export const WalletAddress = ({}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mm}>
        <img src={"mm.png"} />
      </div>
      <div className={styles.address}>
        <span>0x1jqcds12...sk4e</span>
      </div>
      <div className={styles.connect}>
        <img src={"connected.png"} />
      </div>
    </div>
  );
};
