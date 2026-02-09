"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Sample product data
  const product = {
    id: 1,
    title: "Celestite Charm: Light, Serenity, And Higher Energy",
    price: 3500,
    originalPrice: 4200,
    rating: 4.5,
    reviews: 248,
    image: "/categories/rudra.jpg",
    description: "Experience the celestial energy of our premium Celestite charm. Crafted with care for spiritual seekers, this beautiful piece brings light, serenity, and higher energy into your life.",
    features: [
      "100% Authentic Celestite",
      "Hand-selected and blessed",
      "Chakra-balancing properties",
      "Perfect for meditation and spiritual practice"
    ],
    details: {
      weight: "15g",
      size: "1.5 inch",
      material: "Pure Celestite",
      origin: "Madagascar"
    }
  };

  const reviews = [
    { name: "Priya S.", rating: 5, text: "This product exceeded my expectations. The energy is amazing!" },
    { name: "Arjun K.", rating: 4, text: "Great quality and fast delivery. Very happy with my purchase." },
    { name: "Deepika M.", rating: 5, text: "Authentic and beautifully crafted. Highly recommended!" }
  ];

  const similarProducts = [
    { id: 1, name: "Rudraksha Pendant", price: 2500, image: "/categories/rudra.jpg" },
    { id: 2, name: "Mala Beads", price: 3000, image: "/categories/rudra.jpg" },
    { id: 3, name: "Healing Bracelet", price: 2800, image: "/categories/rudra.jpg" },
    { id: 4, name: "Spiritual Ring", price: 1999, image: "/categories/rudra.jpg" },
    { id: 5, name: "Amulet Charm", price: 2200, image: "/categories/rudra.jpg" },
    { id: 6, name: "Energy Crystal", price: 2600, image: "/categories/rudra.jpg" }
  ];

  return (
    <div className="bg-[#fff2df] min-h-screen">
        <Navbar/>
      {/* Breadcrumb */}
      <div className="bg-amber-700 text-white px-6 py-2 text-sm">
        <Link href="/" className="hover:underline">Home</Link>
        <span> / </span>
        <Link href="/category" className="hover:underline">Category</Link>
        <span> / </span>
        <span>{product.title}</span>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-8 shadow-sm mb-8">
          {/* Left: Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-amber-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{"⭐".repeat(Math.floor(product.rating))}</span>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-amber-700">₹{product.price}</span>
              <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg  text-gray-700">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2  hover:bg-gray-100">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
              <Link href="/cart" className="flex-1">
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700">
                  Add to Cart
                </button>
              </Link>
            </div>

            {/* Share buttons */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button className="flex items-center gap-2 text-gray-700 hover:text-amber-700">❤️ Wishlist</button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-amber-700">📤 Share</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            {["description", "features", "details"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize font-medium ${
                  activeTab === tab
                    ? "text-amber-700 border-b-2 border-amber-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab === "description" ? "Product Description" : tab === "features" ? "Features" : "Product Details"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          {activeTab === "features" && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center gap-3">
                    <span className="text-amber-600">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "details" && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-600 capitalize">{key}</p>
                    <p className="text-gray-900 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customer Feedback */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Customers Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border border-amber-200 rounded-lg p-4">
                <p className="text-sm mb-2">{"⭐".repeat(review.rating)}</p>
                <p className="text-gray-700 text-sm mb-3">{review.text}</p>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authenticity Section */}
        <div className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authenticity is every Crackdown</h2>
          <p className="text-gray-700">
            We guarantee 100% authenticity for all our products. Each item is carefully selected and blessed by spiritual experts. Your satisfaction and spiritual growth are our priority.
          </p>
        </div>

        {/* Similar Products */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Similar Products</h2>
            <Link href="/category" className="text-amber-700 hover:underline text-sm">See More</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                <div className="relative w-full h-40 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-amber-700 font-bold">₹{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
