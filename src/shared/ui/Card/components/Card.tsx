import { ReactNode } from "react";
import styles from "./Card.module.scss";
import { SX } from "../../../utils/styles";

interface Props {
  children: ReactNode;
  sx?: SX;
}

export const Card = ({ children, sx = {} }: Props) => {
  return (
    <div className={styles.card} style={sx}>
      {children}
    </div>
  );
};
