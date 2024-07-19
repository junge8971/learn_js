import { FC, memo, useState } from "react";

import { DoughTypes } from "../../const/pizza";
import { useAppDispatch } from "../../hooks/redux";
import { addItemToCart } from "../../redux/cart/cartSlice";
import { IPizza } from "../../types/pizza";
import { ColorTypes } from "../../types/stylingComponents";
import { IPizzaToIPizzaInCartAdapter } from "../../utils/adapters";
import { Button } from "../UI/Button/Button";
import cls from "./PizzaItem.module.scss";

interface PizzaItemProps {
  pizza: IPizza;
}

const PizzaItemComponent: FC<PizzaItemProps> = ({ pizza }) => {
  const dispatch = useAppDispatch();
  const [pizzaSettings, setPizzaSettings] = useState({
    type: pizza.types[0],
    size: pizza.sizes[0],
  });

  const setPizzaType = (newType: number) => {
    setPizzaSettings({ ...pizzaSettings, type: newType });
  };
  const setPizzaSize = (newSize: number) => {
    setPizzaSettings({ ...pizzaSettings, size: newSize });
  };

  const addPizzaToCart = () => {
    const pizzaForCart = IPizzaToIPizzaInCartAdapter(pizza, pizzaSettings);
    dispatch(addItemToCart(pizzaForCart));
  };

  return (
    <div className={cls.pizzaItem}>
      <img className={cls.image} src={pizza.imageUrl} alt={pizza.title} />
      <h4 className={cls.title}>{pizza.title}</h4>
      <div className={cls.selector}>
        {pizza.types.map((doughType) => (
          <Button
            key={doughType}
            color={ColorTypes.gray}
            onClick={() => setPizzaType(doughType)}
            isActive={doughType === pizzaSettings.type}
          >
            {DoughTypes[doughType]}
          </Button>
        ))}
      </div>
      <div className={cls.selector}>
        {pizza.sizes.map((size) => (
          <Button
            key={size}
            color={ColorTypes.gray}
            onClick={() => setPizzaSize(size)}
            isActive={size === pizzaSettings.size}
          >
            {size} см.
          </Button>
        ))}
      </div>
      <div>
        <div className={cls.price}>{pizza.price}</div>
        <div>
          <Button color={ColorTypes.orange} onClick={addPizzaToCart}>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export const PizzaItem = memo(PizzaItemComponent);
