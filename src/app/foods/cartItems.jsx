"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <div className="border-1 p-2 ">
        {cart.map((item) => (
          <div key={item.id} className="mb-2 p-2 border-b">
            <h4 className="font-semibold">{item.title}</h4>
            <p>Price: ৳ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
