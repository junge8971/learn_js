/// <reference types="vite-plugin-svgr/client" />

import { FC, memo } from "react";

import UpArrowIcon from "../../assets/svg/UpArrow.svg?react";
import {
  ColorTypes,
  FontStyleTypes,
  FontWeightTypes,
} from "../../types/stylingComponents";
import { Button } from "../UI/Button/Button";
import { Text } from "../UI/Text/Text";
import cls from "./Filter.module.scss";

const FilterComponent: FC = () => {
  return (
    <div className={cls.sort}>
      <div className={cls.label}>
        <UpArrowIcon className={cls.upArrowIcon} />
        <Text
          fontWeight={FontWeightTypes.bold}
          fontStyle={FontStyleTypes.italic}
        >
          Сортировка по:
        </Text>
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
