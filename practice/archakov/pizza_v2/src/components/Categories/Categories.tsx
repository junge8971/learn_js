import { FC, memo, useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCategories } from "../../redux/categories/asyncActions";
import { selectCategory } from "../../redux/categories/categorySlice";
import { RootState } from "../../redux/store";
import { FetchStatuses } from "../../types/fetching";
import { ICategory } from "../../types/pizza";
import { ColorTypes } from "../../types/stylingComponents";
import { Button } from "../UI/Button/Button";
import { CategorySkeleton } from "../UI/Skeletons/CategorySkeleton";
import { ManySkeletons } from "../UI/Skeletons/ManySkeletons";
import cls from "./Categories.module.scss";

const CategoriesComponent: FC = () => {
  const categories = useAppSelector(
    (state: RootState) => state.categorySlice.categories
  );
  const categoriesStatus = useAppSelector(
    (state: RootState) => state.categorySlice.status
  );
  const selectedCategory = useAppSelector(
    (state: RootState) => state.categorySlice.selectedCategory
  );
  console.log(selectedCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const changeSelectedCategory = (category: ICategory) => {
    dispatch(selectCategory(category));
  };

  return (
    <div className={cls.categories}>
      {categoriesStatus === FetchStatuses.success ? (
        categories.map((category) => (
          <Button
            key={category.id}
            color={ColorTypes.gray}
            isActive={category === selectedCategory}
            onClick={() => changeSelectedCategory(category)}
          >
            {category.title}
          </Button>
        ))
      ) : (
        <ManySkeletons amount={5} skeletonComponent={<CategorySkeleton />} />
      )}
    </div>
  );
};

export const Categories = memo(CategoriesComponent);
