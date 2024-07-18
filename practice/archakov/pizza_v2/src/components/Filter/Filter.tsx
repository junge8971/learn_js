import { FC, memo } from "react";

import { Colors } from "../../types/colors";
import { ColorTypes, StyleTypes } from "../../types/stylingComponents";
import { Button } from "../UI/Button/Button";
import { UpArrow } from "../UI/Icons/SVG/UpArrow";
import { Text } from "../UI/Text/Tesxt";
import cls from "./Filter.module.scss";

const FilterComponent: FC = () => {
  return (
    <div className={cls.sort}>
      <div className={cls.label}>
        <UpArrow fill={Colors.black} />
        <Text style={[StyleTypes.bold, StyleTypes.italic]}>Сортировка по:</Text>
        <Text color={ColorTypes.orange}>популярности</Text>
      </div>
      <div className={cls.popup}>
        <Button color={ColorTypes.orange}>популярности</Button>
        <Button color={ColorTypes.orange}>цене</Button>
        <Button color={ColorTypes.orange}>алфавиту</Button>
      </div>
    </div>
  );
};

export const Filter = memo(FilterComponent);
