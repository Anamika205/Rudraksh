"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/categories/rudra.jpg",
  "/categories/rudra.jpg",
  "/categories/rudra.jpg",
];

export default function CategorySlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-48 bg-gray-200 overflow-hidden rounded-lg">
      <Image
        src={images[current]}
        alt="product"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* left */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
      >
        ‹
      </button>

      {/* right */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
      >
        ›
      </button>
    </div>
  );
}
