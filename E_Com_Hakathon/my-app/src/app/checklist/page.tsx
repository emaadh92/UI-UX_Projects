import Checklist from "@/components/checklist";
import React from "react";

const Checkout = () => {
  return (
    <div className=" py-10 px-4">
        <Checklist/>
      <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Billing Form */}
        <div className="bg-white p-6  rounded-lg ">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Organization (Optional)"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded w-full"
            />
            <select
              className="border p-2 rounded w-full"
              defaultValue="default"
            >
              <option value="default" disabled>
                Select Province
              </option>
              <option value="Sindh">Sindh</option>
              <option value="KPK">Khyber Pakhtunkhwa</option>
              <option value="Punjab">Punjab</option>
              <option value="Balochistan">Balochistan</option>
              <option value="GB">Gilgit-Baltistan</option>
            </select>
            <input
              type="text"
              placeholder="ZIP Code (Optional)"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-2 rounded w-full"
            />
            <textarea
              placeholder="Message"
              className="border p-2 rounded w-full h-24"
            ></textarea>
          </form>
        </div>

        {/* Right Side - Product Details */}
        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          <div className="space-y-4">
            {/* Example Product */}
            <div className="flex justify-between">
              <span>Product Name 1</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between">
              <span>Product Name 2</span>
              <span>$30</span>
            </div>
            {/* Subtotal */}
            <div className="flex justify-between border-t pt-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">$80</span>
            </div>
            {/* Total */}
            <div className="flex justify-between border-t pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$80</span>
            </div>
          </div>
          <button className="w-full bg-yellow-600 text-white py-2 mt-6 rounded hover:bg-yellow-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
