"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "2 Mukhi Bracelet - Almonds Warmth & Natural Chemical",
      price: 3500,
      image: "/categories/rudra.jpg",
    },
    {
      id: 2,
      name: "Premium Rudraksha Mala",
      price: 4000,
      image: "/categories/rudra.jpg",
    },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#fff2df] min-h-screen pb-16">
      <Navbar />
      {/* Breadcrumb */}
      <div className="bg-amber-700 text-white px-6 py-2 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span> / </span>
        <span className="font-bold">Wishlist</span>
      </div>

      {/* Main Wishlist Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg border-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            My Wishlist ({wishlistItems.length} items)
          </h2>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Your wishlist is empty</p>
              <Link
                href="/"
                className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-amber-400 transition"
                >
                  <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-amber-700 mb-4">
                    ₹{item.price}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-800 transition text-sm">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
