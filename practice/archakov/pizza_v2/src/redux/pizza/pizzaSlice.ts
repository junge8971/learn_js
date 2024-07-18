import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPizza } from "./../../types/pizza";
import { FetchStatuses } from "../../types/fetching";
import { fetchPizzas } from "./asyncActions";

type PizzaState = {
  pizzas: IPizza[] | [];
  status: FetchStatuses;
};

const initialState: PizzaState = {
  pizzas: [],
  status: FetchStatuses.idle,
};

export const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<IPizza[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPizzas.pending,
      (state, action: PayloadAction<IPizza[]>) => {
        state.status = FetchStatuses.loading;
      }
    );
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<IPizza[]>) => {
        state.status = FetchStatuses.success;
        state.pizzas = action.payload;
      }
    );
    builder.addCase(
      fetchPizzas.rejected,
      (state, action: PayloadAction<IPizza[]>) => {
        state.status = FetchStatuses.error;
        state.pizzas = [];
      }
    );
  },
});

export const { setPizzas } = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;
