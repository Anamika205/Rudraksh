import Image from "next/image";

import Footer from "./Footer";

export default function Hero() {
  return (
    <section className="bg-[#FFF2DF]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#3b2a1f] leading-tight">
            <span className="text-amber-700">Divine Rudraksha</span> for <br />
            Peace, Power & Prosperity
          </h1>

          <p className="mt-6 text-sm text-gray-700 max-w-md">
            Sacred beads carrying the blessings of Lord Shiva.
            Authentic, pure, and hand-selected for spiritual seekers.
          </p>

          <button className="mt-8 bg-[#2f241c] text-white px-6 py-3 rounded-md text-sm">
            See Products now
          </button>
        </div>

        {/* Right image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/img1.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/img1.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden col-span-2">
            <img
              src="/img1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
     
    </section>
    
  );
}
