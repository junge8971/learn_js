import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ICategory } from "../../types/pizza";

const url = import.meta.env.VITE_API_URL;

export const fetchCategories = createAsyncThunk(
  "categorySlice/fetchCategories",
  async () => {
    const response: ICategory[] = (await axios.get(url + "category")).data;
    return response;
  }
);
