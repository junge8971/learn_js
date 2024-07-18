import { FC, memo } from "react";

import { IPizza } from "../../types/pizza";
import { ColorTypes } from "../../types/stylingComponents";
import { Button } from "../UI/Button/Button";
import { FlexContainer } from "../UI/Containers/FlexContainer/FlexContainer";
import { Text } from "../UI/Text/Tesxt";
import cls from "./PizzaItem.module.scss";

interface PizzaItemProps {
  pizza: IPizza;
}

const PizzaItemComponent: FC<PizzaItemProps> = ({ pizza }) => {
  return (
    <div className={cls.pizzaItem}>
      <img className={cls.image} src={pizza.imageUrl} alt={pizza.title} />
      <h4 className={cls.title}>{pizza.title}</h4>
      <div className={cls.selector}>
        <Button color={ColorTypes.gray}>тонкое</Button>
        <Button color={ColorTypes.gray}>традиционное</Button>
      </div>
      <div className={cls.selector}>
        {pizza.sizes.map((size) => (
          <Button key={size} color={ColorTypes.gray}>
            {size} см.
          </Button>
        ))}
      </div>
      <div>
        <div className={cls.price}>{pizza.price}</div>
        <div>
          <FlexContainer>
            <Button color={ColorTypes.orange}>Добавить</Button>
            <Text>2</Text>
          </FlexContainer>
        </div>
      </div>
    </div>
  );
};

export const PizzaItem = memo(PizzaItemComponent);
