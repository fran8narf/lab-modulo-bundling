import React from "react";
import { createRoot } from "react-dom/client";
import { HellowWorldComponent } from "./helloWorldComponent";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HellowWorldComponent />
  </div>
)