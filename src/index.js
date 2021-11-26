import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./core/Context";
import { Provider } from "react-redux";
import store from './core/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Context>
      <App />
    </Context>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
