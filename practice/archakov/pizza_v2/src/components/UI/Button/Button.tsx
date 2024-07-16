import clsx from "clsx";
import { FC, ReactNode, memo } from "react";

import cls from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type?: ButtonTypes;
  isActive?: boolean;
}

export enum ButtonTypes {
  black = "black",
  orange = "orange",
  gray = "gray",
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  type = "black",
  isActive = false,
}) => {
  return (
    <button className={clsx(cls.button, cls[type], isActive && cls.isActive)}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
