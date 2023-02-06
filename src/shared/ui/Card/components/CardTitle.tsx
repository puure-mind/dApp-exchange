import { ReactNode } from "react";
import styles from "./CardTitle.module.scss";

interface Props {
  children: ReactNode;
}

export const CardTitle = ({ children }: Props) => {
  return <span className={styles.card__title}>{children}</span>;
};
