import { FC, memo } from "react";

import { Categories } from "../components/Categories/Categories";
import { Filter } from "../components/Filter/Filter";
import { PizzaItemsList } from "../components/Pizzas/PizzaItemsList";
import { PizzaSearchForm } from "../components/PizzaSearchForm/PizzaSearchForm";
import { FlexContainer } from "../components/UI/Containers/FlexContainer/FlexContainer";

const MainPageComponent: FC = () => {
  return (
    <>
      <FlexContainer>
        <Categories />
        <Filter />
      </FlexContainer>
      <PizzaSearchForm />
      <PizzaItemsList />
    </>
  );
};

export const MainPage = memo(MainPageComponent); //Чеcтно говоря, в этом не уверен
