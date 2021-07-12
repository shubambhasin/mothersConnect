import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const CustomSkeleton = ({ type, color, highlight, count, padding }) => {
  return (
    <div>
      {type === "bar" && (
        <SkeletonTheme color={color} highlightColor={highlight}>
          <p className={`${padding}`}>
            <Skeleton count={count} />
          </p>
        </SkeletonTheme>
      )}
      {type === "card" && (
        <>
          <SkeletonTheme color={color} highlightColor={highlight}>
            <p className="p1-rem">
              <Skeleton className="mb1-rem" circle={true} height={50} width={50} />
              <Skeleton count={count} />
            </p>
          </SkeletonTheme>
        </>
      )}
    </div>
  );
};

export default CustomSkeleton;
