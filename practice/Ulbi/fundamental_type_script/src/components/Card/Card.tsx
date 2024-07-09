import { FC, useState } from "react";

export enum CardVariants {
  outline = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariants;
  onClick: (num: number) => void;
}

export const Card: FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariants.outline ? "2px solid red" : "none",
        background: variant === CardVariants.primary ? "red" : "none",
      }}
      onClick={() => onClick(counter)}
    >
      {children}
    </div>
  );
};
