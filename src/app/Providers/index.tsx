import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const WithProviders = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};
