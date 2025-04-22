"use client";

import { useState, useEffect } from "react";
import useStore from "@/app/cart/store"; // Ensure the correct path

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  oldprice?: number; // Optional old price
  newprice: number; // Required new price
}

export default function AddToCart({ product }: { product: Product }) {
  const { basket, addItem, removeItem } = useStore(); // Access store state and actions
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client side (useEffect is called after hooks)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Find the current item in the basket (if any)
  const currentItem = basket.find(item => item._id === product._id);
  const quantity = currentItem ? currentItem.count : 0;

  // Prevent render if not client-side
  if (!isClient) {
    return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
  }

  // Handle adding the product to the basket
  const handleAddItem = () => {
    addItem(product); // Add product to the basket
  };

  // Handle removing the product from the basket
  const handleRemoveItem = () => {
    if (quantity > 0) {
      removeItem(product._id); // Remove product from the basket
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Decrement Item Button */}
      <button
        onClick={handleRemoveItem}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition-all ${
          quantity === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
        disabled={quantity === 0}
      >
        -
      </button>

      {/* Display Item Count */}
      <span className="w-8 text-center font-semibold text-lg">{quantity}</span>

      {/* Increment Item Button */}
      <button
        onClick={handleAddItem}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition-all ${
          quantity === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        +
      </button>

      {/* Remove Item Button */}
      <button
        onClick={() => removeItem(product._id)}
        className="ml-4 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-200"
      >
        Remove
      </button>
    </div>
  );
}
