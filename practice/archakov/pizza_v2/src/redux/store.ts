import { configureStore } from "@reduxjs/toolkit";

import { categoryReducer } from "./categories/categorySlice";
import { pizzaReducer } from "./pizza/pizzaSlice";
import { pizzaSearchFormReducer } from "./pizzaSearchForm/pizzaSearchFormSlice";

export const store = configureStore({
  reducer: {
    pizzaSlice: pizzaReducer,
    categorySlice: categoryReducer,
    pizzaSearchForm: pizzaSearchFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
