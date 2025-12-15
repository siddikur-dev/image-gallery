import { ReviewCardSkeleton } from "@/components/skeleton/ReviewCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-3">
      {Array.from({ length: 12 }).map((_, i) => (
        <ReviewCardSkeleton key={i} />
      ))}
      {[...Array(12)].map((_, i) => (<ReviewCardSkeleton key={i} />))}
    </div>
  );
};

export default loading;
