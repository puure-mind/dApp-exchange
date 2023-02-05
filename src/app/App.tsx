import React from "react";
import styles from "./App.module.scss";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <>
      <BgAnim />
      <AppRoutes />
    </>
  );
};

const BgAnim = () => {
  return (
    <figure className={styles.figure}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>
  );
};
