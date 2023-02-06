import { ReactNode } from "react";
import { SX } from "../../../utils/styles";
import styles from "./Tabs.module.scss";

interface Props {
  children: ReactNode;
  sx?: SX;
}

export const Tabs = ({ children, sx = {} }: Props) => {
  return (
    <div className={styles.tabs} style={sx}>
      {children}
    </div>
  );
};
