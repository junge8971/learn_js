import debounce from "debounce";
import { ChangeEvent, FC, memo, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSearchValue } from "../../redux/pizzaSearchForm/pizzaSearchFormSlice";
import { RootState } from "../../redux/store";
import { TextInput } from "../UI/Form/Input/TextInput/TextInput";

const PizzaSearchFormComponent: FC = () => {
  const searchValue = useAppSelector(
    (state: RootState) => state.pizzaSearchForm.searchValue
  );
  const dispatch = useAppDispatch();

  const changeSearchValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(event.target.value));
    },
    []
  );

  return (
    <TextInput
      value={searchValue}
      placeholder="Ищем пыццу"
      onChange={changeSearchValue}
    />
  );
};

export const PizzaSearchForm = memo(PizzaSearchFormComponent);
