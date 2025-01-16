import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import { Provider } from "mobx-react";
import wordsStore from "./store/wordsStore";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={wordsStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
