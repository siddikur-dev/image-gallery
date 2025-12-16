import { Nata_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

// nato sans font
const nato = Nata_Sans({
  weight: "400",
  subsets: ["latin"],
});

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: text, likes, date } = review;

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-5 space-y-4 ${nato.className}`}
    >
      {/* User Info */}
      <div className="flex items-center gap-4">
        <Image
          width={12}
          height={12}
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{text}</p>

      {/* Likes */}
      <div className="text-sm text-gray-500">
        👍 {likes.length} people found this helpful
      </div>
    </div>
  );
};

export default ReviewCard;
