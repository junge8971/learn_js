import { Categories } from "@/components/Categories/Categories";
import { Filter } from "@/components/Filter/Filter";
import { PizzaItem } from "@/components/Pizzas/PizzaItem";
import { FlexContainer } from "@/components/UI/Containers/FlexContainer/FlexContainer";
import { FC, memo } from "react";

const MainPageComponent: FC = () => {
  return (
    <>
      <FlexContainer>
        <Categories />
        <Filter />
      </FlexContainer>
      <FlexContainer>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </FlexContainer>
    </>
  );
};

export const MainPage = memo(MainPageComponent); //Чеcтно говоря, в этом не уверен
