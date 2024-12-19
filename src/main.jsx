import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import { MyContextComponent } from "./Context/MyContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContextComponent>
  </React.StrictMode>
);
