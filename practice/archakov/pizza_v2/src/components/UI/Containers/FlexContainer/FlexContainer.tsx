import { FC, ReactNode, memo } from "react";

import cls from "./FlexContainer.module.scss";

interface FlexContainerProps {
  children: ReactNode;
}

const FlexContainerComponent: FC<FlexContainerProps> = ({ children }) => {
  return <div className={cls.flexContainer}>{children}</div>;
};

export const FlexContainer = memo(FlexContainerComponent);
