"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function PaymentPage() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const address = localStorage.getItem("selectedAddress");
    if (address) {
      setSelectedAddress(JSON.parse(address));
    }
  }, []);

  return (
    <div className="bg-[#fff2df] min-h-screen pb-16">
      {/* Breadcrumb */}
      <div className="bg-amber-700 text-white px-6 py-2 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span> / </span>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
        <span> / </span>
        <Link href="/checkout" className="hover:underline">
          Checkout
        </Link>
        <span> / </span>
        <span className="font-bold">Payment</span>
      </div>
 <Navbar/>
      {/* Main Payment Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Payment Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border-4 p-6">
              {/* Delivery Address */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 text-lg mb-4">Delivery Address</h4>
                {selectedAddress ? (
                  <div className="border-2 border-amber-700 rounded-lg p-4 bg-amber-50">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {selectedAddress.fullName}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedAddress.addressLine1}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Contact: {selectedAddress.phone}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-600">No address selected</p>
                )}
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-4">Payment Method</h4>
                <div className="space-y-3">
                  <div className="border-2 border-gray-500 text-gray-700 rounded-lg p-4 hover:border-amber-400 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 accent-amber-700" />
                      <span className="font-semibold">Credit/Debit Card</span>
                    </div>
                  </div>
                  <div className="border-2 border-gray-500  text-gray-700 rounded-lg p-4 hover:border-amber-400 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 accent-amber-700" />
                      <span className="font-semibold">UPI</span>
                    </div>
                  </div>
                  <div className="border-2 border-gray-500  text-gray-700 rounded-lg p-4 hover:border-amber-400 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 accent-amber-700" />
                      <span className="font-semibold">Cash on Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Order Summary (2 items)
              </h2>

              {/* Price Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">₹7,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Coupon Applied</span>
                  <span className="text-green-600 font-medium">-₹352</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-₹700</span>
                </div>
              </div>

              {/* Total Amount */}
              <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
                <span className="font-bold text-gray-900">Total Amount</span>
                <span className="font-bold text-xl text-amber-700">₹6,448</span>
              </div>

              {/* Pay Now Button */}
              <button className="w-full bg-amber-700 text-white py-3 rounded-lg font-bold hover:bg-amber-800 transition">
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
