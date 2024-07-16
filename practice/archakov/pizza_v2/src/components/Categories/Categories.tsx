import { Button, ButtonTypes } from "@/components/UI/Button/Button";
import { FC, memo } from "react";

import cls from "./Categories.module.scss";

const CategoriesComponent: FC = () => {
  const buttonsType = ButtonTypes.gray;
  return (
    <div className={cls.categories}>
      <Button type={buttonsType} isActive={true}>
        Все
      </Button>
      <Button type={buttonsType}>Мясные</Button>
      <Button type={buttonsType}>Вегетарианская</Button>
      <Button type={buttonsType}>Гриль</Button>
      <Button type={buttonsType}>Острые</Button>
      <Button type={buttonsType}>Закрытые</Button>
    </div>
  );
};

export const Categories = memo(CategoriesComponent);
