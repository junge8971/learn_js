import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Posts from "../pages/Posts";
import About from "../pages/About";
import PostPage from "../pages/PostPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/about_us" element={<About />}></Route>
      <Route path="/post/:id" element={<PostPage />}></Route>
    </Routes>
  );
}
