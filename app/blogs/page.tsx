"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";          

const blogPosts = [
  {
    id: 1,
    title: "The Sacred Threads",
    date: "Dated 24th, Oct 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/categories/rudra.jpg",
  },
  {
    id: 2,
    title: "The Sacred Threads",
    date: "Dated 24th, Oct 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/categories/rudra.jpg",
  },
  {
    id: 3,
    title: "The Sacred Threads",
    date: "Dated 24th, Oct 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/categories/rudra.jpg",
  },
  {
    id: 4,
    title: "The Sacred Threads",
    date: "Dated 24th, Oct 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/categories/rudra.jpg",
  },
  {
    id: 5,
    title: "The Sacred Threads",
    date: "Dated 24th, Oct 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/categories/rudra.jpg",
  },
  {
    id: 6,
    title: "The Sacred Threads",
    date: "Dated 24th, Oct 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/categories/rudra.jpg",
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-[#fff2df] min-h-screen">
        <Navbar/>
      {/* Hero Banner Section */}
      <div className="relative w-full h-80 bg-gradient-to-r from-[#3b2a22] to-[#5a4536] overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="flex-1 text-white">
            <h1 className="text-5xl font-bold leading-tight">
              Sacred Threads of Knowledge: <br />
              The Essence of Spiritual Living <span className="text-amber-500">-Panini</span>
            </h1>
            <p className="mt-4 text-gray-200 max-w-2xl">
              Every transformation is a story written in the silence. Learn the deeper wisdom of spiritual living through ancient teachings and modern insights.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center w-80 h-80 relative">
            <Image
              src="/categories/rudra.jpg"
              alt="Hero"
              fill
              className="object-cover rounded-full opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-amber-800 mb-12">Recent blog posts</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                
                {/* Date with icon */}
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                  📅 {post.date}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>

                {/* Read more */}
                <button className="mt-4 text-amber-700 font-medium text-sm hover:text-amber-800">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
            <Footer/>
    </div>
  );
}
