"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import { ReviewCardSkeleton } from "@/components/skeleton/ReviewCardSkeleton";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const reviewsData = fetch(
      " https://taxi-kitchen-api.vercel.app/api/v1/reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading />;
  }
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl text-amber-300">
        {" "}
        Total {reviews.length} Review Found
      </h2>
      <div className="grid grid-cols-3 gap-6 px-5 py-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
