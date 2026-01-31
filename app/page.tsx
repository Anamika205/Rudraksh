"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/Category";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <CategorySection />

      {/* Featured Products Section */}
      <section className="bg-white py-16">
      
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative w-full h-48 bg-gray-200">
                  <img src="/categories/rudra.jpg" className="w-full h-full object-cover" alt="product" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Premium Rudraksha</h3>
                  <p className="text-sm text-gray-600 mb-4">Authentic and blessed for spiritual growth.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">$49.99</span>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#2f241c] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">See What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Singh", text: "The Rudraksha I bought has truly transformed my spiritual journey. Highly recommended!" },
              { name: "Arjun Sharma", text: "Authentic quality and fast delivery. Worth every penny. Very satisfied!" },
              { name: "Deepika Patel", text: "Blessed by the divine energy of these sacred beads. Thank you Shakti Punj!" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-6">
                <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-700"></div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-amber-200">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-6">Subscribe to our newsletter for exclusive offers and spiritual insights.</p>
          
          <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { q: "Are your Rudraksha beads authentic?", a: "Yes, all our Rudraksha beads are 100% authentic and sourced directly from sacred trees." },
              { q: "How should I care for my Rudraksha?", a: "Keep them in a clean place. You can wash with water occasionally. Avoid harsh chemicals." },
              { q: "What is the return policy?", a: "We offer 30 days money-back guarantee if you're not satisfied with your purchase." },
              { q: "Do you ship internationally?", a: "Yes, we ship worldwide. Shipping time varies by location." },
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
