import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Монтирование компонента в приложение
const App = ReactDOM.createRoot(document.getElementById("App"));
App.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
