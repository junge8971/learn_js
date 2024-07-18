import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { PageWrapper } from "../components/UI/PageWrapper/PageWrapper.";

export const MainLayout: FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
    </PageWrapper>
  );
};
