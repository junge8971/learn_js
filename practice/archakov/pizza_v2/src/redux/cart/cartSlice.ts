import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TCartItem, TCartItems } from "../../types/cart";

type CartState = {
  items: TCartItems;
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<TCartItem>) {
      state.items.push(action.payload); // TS ругается, так и не понял почему
    },
    deleteItemFromCartByUuid(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.uuid !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, deleteItemFromCartByUuid, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
