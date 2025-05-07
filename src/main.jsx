import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
