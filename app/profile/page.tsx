"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="bg-[#fff2df] min-h-screen pb-16">
      <div className="bg-amber-700 text-white px-6 py-2 text-sm">
        <Link href="/" className="hover:underline">Home</Link>
        <span> / </span>
        <span className="font-bold">Profile</span>
      </div>
{/* 
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg border-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your phone" />
            </div>
            <button className="bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition">
              Update Profile
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
