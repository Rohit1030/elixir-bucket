import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/utils.scss";
import AppRoutes from "./AppRoutes";

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
