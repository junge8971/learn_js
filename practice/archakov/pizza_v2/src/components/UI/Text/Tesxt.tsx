import clsx from "clsx";
import { FC, ReactNode, memo } from "react";

import { ColorTypes, StyleTypes } from "../../../types/stylingComponents";
import cls from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
  color?: ColorTypes;
  style?: StyleTypes[];
}

const TextComponent: FC<TextProps> = ({
  children,
  color = ColorTypes.black,
  style = [StyleTypes.plainText],
}) => {
  return (
    <p
      className={clsx(
        cls.text,
        cls[color],
        style.map((item) => cls[item])
      )}
    >
      {children}
    </p>
  );
};

export const Text = memo(TextComponent);
