import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/reset.css";
import "./scss/main.scss";
import Test3D from "./tests/Test3D.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Test3D />
  </React.StrictMode>
);
