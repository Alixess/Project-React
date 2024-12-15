import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import { MyContextProvider } from "./Context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
