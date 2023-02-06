import { ReactNode } from "react";
import styles from "./CardContent.module.scss";

export const CardContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles.car__content}>{children}</div>;
};
