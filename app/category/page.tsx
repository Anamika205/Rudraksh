"use client"; // needed for interactivity like search (optional)

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Example categories
const allCategories = [
  { name: "Rudraksha", image: "/categories/rudra.jpg" },
  { name: "Bracelets", image: "/categories/rudra.jpg" },
  { name: "Necklaces", image: "/categories/rudra.jpg" },
  { name: "Earrings", image: "/categories/rudra.jpg" },
  { name: "Rings", image: "/categories/rudra.jpg" },
  { name: "Mala", image: "/categories/rudra.jpg" },
  { name: "Pendants", image: "/categories/rudra.jpg" },
  { name: "Healing Stones", image: "/categories/rudra.jpg" },
];

export default function CategoryPage() {
  const [search, setSearch] = useState("");

  // Filter categories based on search input
  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#fff2df] min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto p-6 space-y-6">

        {/* Top bar: showing + search */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-2/3">
            <div className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm">
              Showing all {filteredCategories.length} results
            </div>
            <div className="hidden md:block text-sm text-gray-600">Home &nbsp;/&nbsp; All Category</div>
          </div>

          <div className="w-full">
            <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 w-full focus:outline-none"
              />
              <button className="px-4 py-2 bg-amber-600 text-white">
                🔍
              </button>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#2b211d] to-[#3b2a25] p-8 flex items-center gap-6">
          <div className="flex-1 text-white">
            <div className="text-6xl font-extrabold tracking-wide opacity-90">25%</div>
            <h2 className="text-3xl font-bold mt-2">Authentic Rudraksha and Healing accessories!!</h2>
            <p className="mt-3 text-sm text-gray-200 max-w-xl">In a world of fleeting trends, we stand for enduring purity and genuine intention.</p>
            <Link href="/category/rudraksha" className="inline-block mt-6 bg-amber-600 px-4 py-2 rounded text-sm">SHOP NOW</Link>
          </div>

          <div className="w-48 h-48 relative hidden sm:block">
            <Image src="/categories/banner-model.jpg" alt="model" fill className="object-contain" />
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name.toLowerCase()}`}
              className="relative block rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-to-b from-[#4a382f] to-[#2b2018] p-4 rounded-xl h-56 flex items-center justify-center">
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                </div>
              </div>

              <div className="absolute left-4 bottom-4 text-white text-sm font-medium">
                {cat.name}
              </div>
            </Link>
          ))}
        
        </div>

      </div>
        <Footer/>
    </div>
  );
}
