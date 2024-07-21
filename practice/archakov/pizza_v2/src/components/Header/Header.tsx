/// <reference types="vite-plugin-svgr/client" />

import { FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../assets/svg/Cart.svg?react";
import { useAppSelector } from "../../hooks/redux";
import {
  ColorTypes,
  FontSizeTypes,
  FontWeightTypes,
} from "../../types/stylingComponents";
import {
  getTotalCountFromCartItems,
  getTotalPriceFromCartItems,
} from "../../utils/cartCalculations";
import { Button } from "../UI/Button/Button";
import { FlexContainer } from "../UI/Containers/FlexContainer/FlexContainer";
import { Text } from "../UI/Text/Text";
import cls from "./Header.module.scss";

const HeaderComponent: FC = () => {
  const cartItems = useAppSelector((state) => state.cartSlice.items);
  const totalCartPrice = useMemo(
    () => getTotalPriceFromCartItems(cartItems),
    [cartItems]
  );
  const totalCartCount = useMemo(
    () => getTotalCountFromCartItems(cartItems),
    [cartItems]
  );
  return (
    <header className={cls.header}>
      <FlexContainer>
        <Link to="/">
          <div className={cls.logo}>
            <img
              width="38"
              src="https://react-pizza-v2.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
              alt="Pizza logo"
            />
            <div>
              <Text
                fontWeight={FontWeightTypes.veryBold}
                fontSize={FontSizeTypes.heading}
              >
                React Pizza
              </Text>
              <Text>самая вкусная пицца во вселенной</Text>
            </div>
          </div>
        </Link>

        <Link to="cart">
          <Button color={ColorTypes.orange}>
            <FlexContainer>
              <Text color={ColorTypes.white}>{totalCartPrice} ₽</Text>
              <CartIcon className={cls.cartIcon} />
              <Text color={ColorTypes.white}>{totalCartCount}</Text>
            </FlexContainer>
          </Button>
        </Link>
      </FlexContainer>
    </header>
  );
};

export const Header = memo(HeaderComponent);
