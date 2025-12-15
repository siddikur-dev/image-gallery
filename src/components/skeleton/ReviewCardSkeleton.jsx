export const ReviewCardSkeleton = () => {
return (
<div className="bg-white rounded-2xl shadow-md p-5 space-y-4 animate-pulse">
{/* User Skeleton */}
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-300" />
<div className="space-y-2">
<div className="h-4 w-32 bg-gray-300 rounded" />
<div className="h-3 w-24 bg-gray-300 rounded" />
</div>
</div>


{/* Rating Skeleton */}
<div className="flex gap-2">
{Array.from({ length: 5 }).map((_, i) => (
<div key={i} className="w-4 h-4 bg-gray-300 rounded" />
))}
</div>


{/* Text Skeleton */}
<div className="space-y-2">
<div className="h-3 w-full bg-gray-300 rounded" />
<div className="h-3 w-11/12 bg-gray-300 rounded" />
<div className="h-3 w-9/12 bg-gray-300 rounded" />
</div>


{/* Likes Skeleton */}
<div className="h-3 w-40 bg-gray-300 rounded" />
</div>
);
};