import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { CartPage } from "../pages/CartPage";
import { MainPage } from "../pages/MainPage";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};
