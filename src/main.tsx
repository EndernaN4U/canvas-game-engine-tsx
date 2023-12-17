import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/reset.css";
import "./scss/main.scss";

import Tempest from "./game/Tempest";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Tempest />
  </React.StrictMode>
);
