export const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300" />

      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
        <div className="h-3 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 rounded" />

        <div className="flex gap-3 pt-3">
          <div className="flex-1 h-10 bg-gray-300 rounded-xl" />
          <div className="flex-1 h-10 bg-gray-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
