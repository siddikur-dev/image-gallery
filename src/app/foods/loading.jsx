import { FoodCardSkeleton } from "@/components/skeleton/foodsCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <FoodCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default loading;
