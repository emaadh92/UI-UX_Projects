import Link from "next/link";
import React from "react";

const Checklist = () => {
  return (
    <div
      className="w-full max-w-[1440px] h-[316px] mx-auto bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/shophero.jpg')", // Replace with your actual image path
      }}
    >
      <div className="text-black py-4 px-6 rounded-md">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-2 text-black ">Contact Us</h1>
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="text-sm">
          <ol className="flex space-x-2 justify-center">
            <li>
              <Link
                href="/"
                className="text-black  hover:text-yellow-600 transition"
              >
                Home
              </Link>
            </li>
            <li className="text-black ">/</li>
            <li>
              <span className="text-black ">Checklist</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Checklist;
