import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
