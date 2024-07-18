import { FC, memo } from "react";

import { Colors } from "../../types/colors";
import { ColorTypes, StyleTypes } from "../../types/stylingComponents";
import { Button } from "../UI/Button/Button";
import { FlexContainer } from "../UI/Containers/FlexContainer/FlexContainer";
import { CartIcon } from "../UI/Icons/SVG/CartIcon";
import { Text } from "../UI/Text/Tesxt";
import cls from "./Header.module.scss";

const HeaderComponent: FC = () => {
  return (
    <header className={cls.header}>
      <FlexContainer>
        <div className={cls.logo}>
          <img
            width="38"
            src="https://react-pizza-v2.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
            alt="Pizza logo"
          />
          <div>
            <Text style={[StyleTypes.veryBold, StyleTypes.heading]}>
              React Pizza
            </Text>
            <Text>самая вкусная пицца во вселенной</Text>
          </div>
        </div>

        <Button color={ColorTypes.orange}>
          <FlexContainer>
            <Text color={ColorTypes.white}>520 ₽</Text>
            <CartIcon fill={Colors.white} />{" "}
            <Text color={ColorTypes.white}>3</Text>
          </FlexContainer>
        </Button>
      </FlexContainer>
    </header>
  );
};

export const Header = memo(HeaderComponent);
