import clsx from "clsx";
import { FC, ReactNode, memo } from "react";

import { ColorTypes } from "../../../types/stylingComponents";
import cls from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  color?: ColorTypes;
  isActive?: boolean;
  onClick?: () => void;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  color = ColorTypes.black,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(cls.button, cls[color], { [cls.isActive]: isActive })}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
