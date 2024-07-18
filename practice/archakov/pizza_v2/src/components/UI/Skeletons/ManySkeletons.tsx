import { FC, ReactNode, memo } from "react";

export interface ManySkeletonsProps {
  amount?: number;
  skeletonComponent: ReactNode;
}

const ManySkeletonsComponent: FC<ManySkeletonsProps> = ({
  amount = 10,
  skeletonComponent,
}: ManySkeletonsProps) => {
  return <>{[...new Array(amount)].map(() => skeletonComponent)}</>;
};

export const ManySkeletons = memo(ManySkeletonsComponent);
