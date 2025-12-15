const FoodDetailsSkeleton = () => {
return (
<div className="max-w-5xl mx-auto px-5 py-10 animate-pulse">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Image Skeleton */}
<div className="w-full h-[350px] bg-gray-300 rounded-2xl" />


{/* Content Skeleton */}
<div className="space-y-4">
<div className="h-8 w-3/4 bg-gray-300 rounded" />
<div className="h-4 w-1/2 bg-gray-300 rounded" />
<div className="h-4 w-1/3 bg-gray-300 rounded" />
<div className="h-6 w-1/4 bg-gray-300 rounded" />


<div className="flex gap-4 pt-4">
<div className="h-12 w-32 bg-gray-300 rounded-xl" />
<div className="h-12 w-40 bg-gray-300 rounded-xl" />
</div>
</div>
</div>
</div>
);
};


export default FoodDetailsSkeleton;