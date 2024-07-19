import { IPizza, IPizzaInCard, IPizzaSettings } from "../types/pizza";

export const IPizzaToIPizzaInCartAdapter = (
  pizza: IPizza,
  pizzaSettings: IPizzaSettings
): IPizzaInCard => {
  const { types, sizes, ...useful } = pizza;
  return {
    ...useful,
    ...pizzaSettings,
    uuid: new Date().getTime(),
  };
};
