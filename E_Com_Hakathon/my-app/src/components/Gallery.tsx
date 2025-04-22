"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for navigation
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Adjust the path as per your project structure

// Function to fetch images from the Sanity API
async function fetchProductImages() {
  return await client.fetch(`
    *[_type == "product"] [0...4] {
      "imageUrl": productImage.asset->url
    }
  `);
}

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetchProductImages();
      const imageUrls = data.map((item: { imageUrl: string }) => item.imageUrl);
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) {
    return <p className="text-center text-gray-500">Loading images...</p>;
  }

  return (
    <div className="max-w-[1170px] mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Gallery
      </h1>
      <div className="relative flex items-center justify-center">
        {/* Carousel */}
        <div className="w-full h-[400px] overflow-hidden relative rounded-lg">
          <Image
            src={images[currentIndex]}
            width={1000}
            height={1000}
            loading="lazy"
            alt={`Gallery ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-lg hover:bg-yellow-600"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-lg hover:bg-yellow-600"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-6 space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
              currentIndex === index ? "border-yellow-500" : "border-transparent"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image}
              width={500}
              height={500}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
