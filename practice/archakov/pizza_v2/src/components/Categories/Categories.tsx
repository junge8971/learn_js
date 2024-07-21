import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCategories } from "../../redux/categories/asyncActions";
import { selectCategory } from "../../redux/categories/categorySlice";
import { FetchStatuses } from "../../types/fetching";
import { ICategory } from "../../types/pizza";
import { ColorTypes } from "../../types/stylingComponents";
import { Button } from "../UI/Button/Button";
import { CategorySkeleton } from "../UI/Skeletons/CategorySkeleton";
import { ManySkeletons } from "../UI/Skeletons/ManySkeletons";
import cls from "./Categories.module.scss";

const CategoriesComponent: FC = () => {
  const categories = useAppSelector((state) => state.categorySlice.categories);
  console.log(categories);
  const categoriesStatus = useAppSelector(
    (state) => state.categorySlice.status
  );
  const selectedCategory = useAppSelector(
    (state) => state.categorySlice.selectedCategory
  );
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
