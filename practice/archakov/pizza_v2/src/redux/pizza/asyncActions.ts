import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { PizzaSearchProps } from "../../types/fetching";
import { IPizza } from "../../types/pizza";

const url = import.meta.env.VITE_API_URL;

export const fetchPizzas = createAsyncThunk<IPizza[], PizzaSearchProps>(
  "pizzaSlice/fetchPizzas",
  async ({ selectedCategory, searchValue }) => {
    const getParams = {
      ...(selectedCategory && { category: selectedCategory.id }),
      ...(searchValue && { title: searchValue }),
    };
    const response = await axios.get(url + "pizzas/", {
      params: { ...getParams },
    });
    const pizzas: IPizza[] = response.data;
    return pizzas;
  }
);
