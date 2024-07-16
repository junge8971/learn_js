import { FC, ReactNode, memo } from "react";

import cls from "./PageWrapper.module.scss";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapperComponent: FC<PageWrapperProps> = ({ children }) => {
  return <div className={cls.pageWrapper}> {children}</div>;
};

export const PageWrapper = memo(PageWrapperComponent);
