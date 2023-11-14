import React from "react";
import ReactDOM from "react-dom/client";

import Test from "./tests/Test.tsx";

import "./scss/reset.css";
import "./scss/main.scss";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
);
