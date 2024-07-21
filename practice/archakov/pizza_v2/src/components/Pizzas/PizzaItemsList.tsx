import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchPizzas } from "../../redux/pizza/asyncActions";
import { FetchStatuses } from "../../types/fetching";
import { FlexContainer } from "../UI/Containers/FlexContainer/FlexContainer";
import { ManySkeletons } from "../UI/Skeletons/ManySkeletons";
import { PizzaSkeleton } from "../UI/Skeletons/PizzaSkeleton";
import { PizzaItem } from "./PizzaItem";

const PizzaItemsListComponent: FC = () => {
  const pizzas = useAppSelector((state) => state.pizzaSlice.pizzas);
  const searchValue = useAppSelector(
    (state) => state.pizzaSearchForm.searchValue
  );
  const selectedCategory = useAppSelector(
    (state) => state.categorySlice.selectedCategory
  );
  const pizzasStatus = useAppSelector((state) => state.pizzaSlice.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPizzas({ selectedCategory, searchValue }));
  }, [searchValue, selectedCategory]);

  return (
    <FlexContainer>
      {pizzasStatus === FetchStatuses.success ? (
        pizzas.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)
      ) : (
        <ManySkeletons amount={10} skeletonComponent={<PizzaSkeleton />} />
      )}
    </FlexContainer>
  );
};

export const PizzaItemsList = memo(PizzaItemsListComponent);
