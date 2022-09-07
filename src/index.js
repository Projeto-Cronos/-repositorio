import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles, ResetCSS } from "./style/global";
import { BrowserRouter } from "react-router-dom"
import Provider from './providers/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider>
      <GlobalStyles />
      <ResetCSS />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
