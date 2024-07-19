import clsx from "clsx";
import { FC, ReactNode, memo } from "react";

import {
  ColorTypes,
  FontSizeTypes,
  FontStyleTypes,
  FontWeightTypes,
} from "../../../types/stylingComponents";
import cls from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
  color?: ColorTypes;
  fontWeight?: FontWeightTypes;
  fontSize?: FontSizeTypes;
  fontStyle?: FontStyleTypes;
}

const TextComponent: FC<TextProps> = ({
  children,
  color = ColorTypes.black,
  fontWeight = FontWeightTypes.normal,
  fontSize = FontSizeTypes.plainText,
  fontStyle = FontStyleTypes.normal,
}) => {
  return (
    <p
      className={clsx(
        cls.text,
        cls[color],
        cls[fontWeight],
        cls[fontSize],
        cls[fontStyle]
      )}
    >
      {children}
    </p>
  );
};

export const Text = memo(TextComponent);
