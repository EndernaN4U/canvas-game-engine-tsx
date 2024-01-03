import React from "react";
import ReactDOM from "react-dom/client";

import Asteroids from "./game/Asteroids";

import "./scss/reset.css";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Asteroids />
  </React.StrictMode>
);
