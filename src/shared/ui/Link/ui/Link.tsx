import React from "react";
import styles from "./Link.module.scss";

interface Props {
  children: React.ReactNode;
  target: string;
}

export const Link = ({ children, target = "/" }: Props) => {
  return (
    <a className={styles.link} href={target}>
      {children}
    </a>
  );
};
