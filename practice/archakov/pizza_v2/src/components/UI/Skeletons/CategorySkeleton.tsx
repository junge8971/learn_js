import { FC, memo } from "react";
import ContentLoader from "react-content-loader";

const CategorySkeletonComponent: FC = () => (
  <ContentLoader seed={2} width={100} hanging={40}>
    <circle cx="100" cy="40" r="30" />
  </ContentLoader>
);

export const CategorySkeleton = memo(CategorySkeletonComponent);
