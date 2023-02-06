import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";

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
