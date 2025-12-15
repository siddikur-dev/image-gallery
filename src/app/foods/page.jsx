'use client";';
import FoodCard from "@/components/cards/foodsCard";
import React, { use } from "react";
import CartItems from "./cartItems";
import { CartContext } from "@/context/CartProvider";
const foodsData = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await foodsData();
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl text-amber-300">
        {" "}
        Total {foods.length} Foods Found
      </h2>
      <div className="flex gap-4">
        <div className="grid grid-cols-3 gap-6 px-5 py-3">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-72 p-4 border border-gray-300 rounded-lg h-screen">
          {/* Sidebar content can go here */}
          <h2 className="text-3xl">
            {" "}
            Cart Items 
          </h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
