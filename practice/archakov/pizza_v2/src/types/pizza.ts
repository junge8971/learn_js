export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface IPizzaInCard
  extends Omit<IPizza, "types" | "sizes">,
    IPizzaSettings {
  uuid: number;
}

export interface ICategory {
  id: number;
  title: string;
}

export interface IPizzaSettings {
  type: number;
  size: number;
}
