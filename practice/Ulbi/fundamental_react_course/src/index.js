import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Монтирование компонента в приложение
const app = ReactDOM.createRoot(document.getElementById("App"));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
