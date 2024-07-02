import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Posts from "./pages/Posts";
import About from "./pages/About";

import Navbar from "./components/UI/navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/about_us" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
