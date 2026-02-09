"use client";

import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const products = [
  { id: 1, name: "Rudraksha", price: "$45", image: "/categories/rudra.jpg", rating: 5, reviews: 120 },
  { id: 2, name: "Rudraksha", price: "$50", image: "/categories/rudra.jpg", rating: 4, reviews: 85 },
  { id: 3, name: "Rudraksha", price: "$55", image: "/categories/rudra.jpg", rating: 5, reviews: 200 },
  { id: 4, name: "Rudraksha", price: "$48", image: "/categories/rudra.jpg", rating: 4, reviews: 95 },
  { id: 5, name: "Rudraksha", price: "$52", image: "/categories/rudra.jpg", rating: 5, reviews: 150 },
  { id: 6, name: "Rudraksha", price: "$49", image: "/categories/rudra.jpg", rating: 4, reviews: 110 },
  { id: 7, name: "Rudraksha", price: "$60", image: "/categories/rudra.jpg", rating: 5, reviews: 180 },
  { id: 8, name: "Rudraksha", price: "$45", image: "/categories/rudra.jpg", rating: 4, reviews: 75 },
  { id: 9, name: "Rudraksha", price: "$58", image: "/categories/rudra.jpg", rating: 5, reviews: 160 },
];

const subcategories = [
  "All Rudraksha",
  "1 Mukhi Rudraksha",
  "2 Mukhi Rudraksha",
  "3 Mukhi Rudraksha",
  "4 Mukhi Rudraksha",
  "5 Mukhi Rudraksha",
];

export default function CategoryProductPage() {
  const params = useParams();
  const categoryName = params?.categoryName ? (typeof params.categoryName === 'string' ? params.categoryName : params.categoryName[0]) : "Category";
  
  const [priceRange, setPriceRange] = useState(100);
  const [selectedRating, setSelectedRating] = useState(0);
  const [search, setSearch] = useState("");

  return (
    
    <div className="bg-[#fff2df] min-h-screen">
        <Navbar/>
      {/* Top bar */}
      <div className="bg-amber-700 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span>Home</span>
          <span>/</span>
          <span className="capitalize">{categoryName}</span>
        </div>
        {/* <div className="flex items-center gap-2">
          <span>♡</span>
          <span>🛒</span>
          <span>👤</span>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search bar and showing */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm">
            All Categories
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Find something"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Flex layout: sidebar + main */}
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="w-64 flex-shrink-0">
            {/* Sidebar header */}
            <div className="text-gray-700 font-bold text-sm mb-4 capitalize">
              {categoryName} Categories
            </div>

            {/* Widget price filter */}
            <div className="bg-white p-6 rounded-lg mb-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Widget price filter</h3>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-2">Price: $0 - ${priceRange}</p>
            </div>

            {/* Product categories */}
            <div className="bg-white p-6 rounded-lg mb-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Product categories</h3>
              <ul className="space-y-2">
                {subcategories.map((cat, idx) => (
                  <li key={idx} className="text-sm text-gray-700 hover:text-amber-700 cursor-pointer">
                    {cat} <span className="text-gray-400">({5 + idx})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Rating */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Product Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <label key={stars} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === stars}
                      onChange={() => setSelectedRating(stars)}
                      className="w-4 h-4"
                    />
                    <span>{"⭐".repeat(stars)}</span>
                    <span className="text-gray-500">({10 + stars * 5})</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-sm">
              <div className="grid grid-cols-3 gap-4 p-4">
                {/* Left: Image and text overlay */}
                <div className="col-span-1 relative h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/categories/rudra.jpg"
                    alt="man"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h2 className="text-lg font-bold text-white text-center px-3">
                      SHOP WISE WITH PRICE COMPARISONS
                    </h2>
                  </div>
                </div>
                {/* Right: Two promo images */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="relative w-full h-28 rounded-lg overflow-hidden">
                    <Image src="/categories/rudra.jpg" alt="promo" fill className="object-cover" />
                  </div>
                  <div className="relative w-full h-28 rounded-lg overflow-hidden">
                    <Image src="/categories/rudra.jpg" alt="promo" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition block group"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100">
                      ♡
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-xs">{"⭐".repeat(product.rating)}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-bold text-amber-700 mb-3">{product.price}</p>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded font-medium text-sm">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
            <Footer/>
    </div>
  );
}
