import { ICategory } from "./pizza";

export enum FetchStatuses {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}

export interface PizzaSearchProps {
  selectedCategory: ICategory | null;
  searchValue: string;
}
