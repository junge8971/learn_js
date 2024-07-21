import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FetchStatuses } from "../../types/fetching";
import { ICategory } from "../../types/pizza";
import { fetchCategories } from "./asyncActions";

type CategoryState = {
  categories: ICategory[] | [];
  status: FetchStatuses;
  selectedCategory: ICategory | null;
};

const initialState: CategoryState = {
  categories: [],
  status: FetchStatuses.idle,
  selectedCategory: null,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
    selectCategory(state, action: PayloadAction<ICategory>) {
      if (action.payload.id === 0) {
        state.selectedCategory = null;
      } else {
        state.selectedCategory = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = FetchStatuses.loading;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<ICategory[]>) => {
          state.status = FetchStatuses.success;
          state.categories = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state) => {
        state.status = FetchStatuses.error;
        state.categories = [];
      });
  },
});
export const { selectCategory, setCategories } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
