import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { MainPage } from "../pages/MainPage";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
