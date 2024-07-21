import { FC, memo } from "react";

import { CartItem } from "../components/Cart/CartItem";
import { Button } from "../components/UI/Button/Button";
import { FlexContainer } from "../components/UI/Containers/FlexContainer/FlexContainer";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { clearCart } from "../redux/cart/cartSlice";

const CartPageComponent: FC = () => {
  const cart = useAppSelector((state) => state.cartSlice.items);
  const dispatch = useAppDispatch();

  const clearItemsInCart = () => dispatch(clearCart());
  return (
    <FlexContainer>
      {cart.map((item) => (
        <CartItem key={item.uuid} item={item} />
      ))}
      <Button onClick={clearItemsInCart}>Удоли всё</Button>
    </FlexContainer>
  );
};

export const CartPage = memo(CartPageComponent);
