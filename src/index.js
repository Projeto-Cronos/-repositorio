import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle, ResetCSS } from "./style/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
