import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SearchState = {
  searchValue: string;
};

const initialState: SearchState = {
  searchValue: "",
};

export const pizzaSearchFormSlice = createSlice({
  name: "pizzaSearchFormSlice",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = pizzaSearchFormSlice.actions;
export const pizzaSearchFormReducer = pizzaSearchFormSlice.reducer;
