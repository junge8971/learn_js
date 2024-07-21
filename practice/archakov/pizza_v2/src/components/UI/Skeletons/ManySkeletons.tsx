import { FC, ReactNode, memo } from "react";

export interface ManySkeletonsProps {
  amount?: number;
  SkeletonComponent: ReactNode;
}

const ManySkeletonsComponent: FC<ManySkeletonsProps> = ({
  amount = 10,
  SkeletonComponent,
}: ManySkeletonsProps) => {
  return (
    <>
      {[...new Array(amount)].map((_, index) => (
        <div key={index}>{SkeletonComponent}</div>
      ))}
    </>
  );
};

export const ManySkeletons = memo(ManySkeletonsComponent);
