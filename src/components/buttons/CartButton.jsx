"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
  const [addCart, setAddCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAddToCart = () => {
    addToCart(food)
    setAddCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={addCart}
      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-xl transition disabled:cursor-no-drop"
    >
      {addCart ? "Added to Cart" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
