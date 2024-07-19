import { FC, memo } from "react";

import { useAppDispatch } from "../../hooks/redux";
import { deleteItemFromCartByUuid } from "../../redux/cart/cartSlice";
import { TCartItem } from "../../types/cart";
import { Button } from "../UI/Button/Button";
import cls from "./CartItem.module.scss";

interface CartItemProps {
  item: TCartItem;
}

const CartItemComponent: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const deliteItem = () => {
    dispatch(deleteItemFromCartByUuid(item.uuid));
  };
  return (
    <div className={cls.cartItem}>
      <div>{item.title}</div>
      <Button onClick={deliteItem}>Удоли</Button>
    </div>
  );
};

export const CartItem = memo(CartItemComponent);
