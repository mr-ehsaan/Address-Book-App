import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "./assets/styleSheets/index.less";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import Store from "../src/redux/store";

const store = Store();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,

  document.getElementById("root")
);
