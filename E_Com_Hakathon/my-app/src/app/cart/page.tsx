"use client";

import { useEffect, useState } from "react";
import useStore from "@/app/cart/store";
import Image from "next/image";
import Link from "next/link";

export default function MyCart() {
  const { basket, addItem, removeItem, getTotalPrice } = useStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-gray-800">
        My Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
        {/* Left Side (Basket Items) */}
        <div className="w-full lg:w-7/12 bg-gray-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          {basket.length > 0 ? (
            basket.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-start sm:items-center md:justify-between bg-white shadow-sm p-3 sm:p-4 mb-3 sm:mb-4 rounded-lg hover:shadow-lg transition-all"
              >
                {/* Item Picture */}
                <div className="flex-shrink-0 mb-2  justify-between sm:mb-0 sm:mr-3">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-lg w-full md:object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex flex-col flex-grow gap-1 sm:gap-2">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Price: ${item.newprice.toFixed(2)}
                  </p>

                  {/* Quantity Controls and Remove */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <button
                      onClick={() => removeItem(item._id)}
                      className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gray-500 text-white font-semibold text-sm sm:text-base ${
                        item.count === 1
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-gray-600"
                      }`}
                      disabled={item.count === 1}
                    >
                      -
                    </button>
                    <span className="text-sm sm:text-lg font-semibold">
                      {item.count}
                    </span>
                    <button
                      onClick={() => addItem(item)}
                      className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-green-500 text-white font-semibold text-sm sm:text-base hover:bg-green-600 transition-all"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="px-2 sm:px-3 py-1 sm:py-2 text-red-500 font-semibold text-sm sm:text-base bg-red-100 hover:bg-red-200 rounded-lg transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg sm:text-xl font-semibold text-gray-700">
                Your basket is empty.
              </p>
              <p className="text-base sm:text-lg text-gray-500 mt-2">
                Browse our products and add items to your basket.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
              >
                Continue Browsing
              </Link>
            </div>
          )}
        </div>

        {/* Right Side (Order Summary) */}
        {basket.length > 0 && (
          <div className="w-full lg:w-5/12 bg-blue-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4 sm:mb-6">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm sm:text-lg text-gray-700 mb-2 sm:mb-4">
              <span>Items:</span>
              <span className="font-semibold">{basket.length}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-lg text-gray-700 mb-2 sm:mb-4">
              <span>Total Price:</span>
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              className="block bg-blue-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
