import { TCartItems } from "../types/cart";

export const getTotalPriceFromCartItems = (items: TCartItems) => {
  if (!items) {
    return 0;
  }
  return items.length;
};

export const getTotalCountFromCartItems = (items: TCartItems) => {
  if (!items) {
    return 0;
  }
  return items.reduce((result, currentItem) => result + currentItem.price, 0);
};
