import React from "react";
import { Route, Routes } from "react-router-dom";

import Posts from "../pages/Posts";
import About from "../pages/About";
import PostPage from "../pages/PostPage";

import { routes } from "../routes";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((rout, index) => (
        <Route key={index} path={rout.path} element={rout.component} exact={rout.exact} />
      ))}
    </Routes>
  );
}
