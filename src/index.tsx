import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { WithProviders } from "./app/Providers";
import { App } from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WithProviders>
      <App />
    </WithProviders>
  </React.StrictMode>
);
