"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Coupon {
  code: string;
  discount: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "2 Mukhi Bracelet - Almonds Warmth & Natural Shaveme", price: 1500, quantity: 1, image: "/categories/rudra.jpg" },
    { id: 2, name: "2 Mukhi Bracelet - Almonds Warmth & Natural Shaveme", price: 1500, quantity: 1, image: "/categories/rudra.jpg" },
    { id: 3, name: "2 Mukhi Bracelet - Almonds Warmth & Natural Shaveme", price: 1500, quantity: 1, image: "/categories/rudra.jpg" },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [showCouponInput, setShowCouponInput] = useState(false);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      setAppliedCoupon({ code: couponCode, discount: 300 });
      setShowCouponInput(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = appliedCoupon?.discount || 0;
  const totalAmount = subtotal - discountAmount;

  return (
    <div className="bg-[#fff2df] min-h-screen pb-16">
      {/* Breadcrumb */}
      <div className="bg-amber-700 text-white px-6 py-2 text-sm">
        <Link href="/" className="hover:underline">Home</Link>
        <span> / </span>
        <Link href="/category" className="hover:underline">Categories</Link>
        <span> / </span>
        <span>Subcategories</span>
        <span> / </span>
        <span>Product Details</span>
        <span> / </span>
        <span className="font-bold">Cart</span>
      </div>

      {/* Main Cart Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border-4 border-blue-400 p-6">
              {/* Tab header */}
              <div className="flex gap-4 mb-6 border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 font-semibold text-gray-900">
                  <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm">
                    {cartItems.length}
                  </div>
                  <span>Cart</span>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-200">
                      {/* Item Image */}
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-xs text-gray-600 mb-3">Offer valid till 15 Dec 2024</p>
                        <p className="text-lg font-bold text-amber-700">₹{item.price}</p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col justify-between items-end gap-2">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 text-lg"
                        >
                          🗑
                        </button>

                        <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-800 hover:bg-gray-100 transition font-semibold"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 text-sm font-medium text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-800 hover:bg-gray-100 transition font-semibold"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button className="text-xs text-gray-600 hover:text-amber-700">
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600 py-8">Your cart is empty</p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary (3 items)</h2>

              {/* Price Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Coupon applied</span>
                    <span>-₹{appliedCoupon.discount}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-₹{discountAmount}</span>
                </div>
              </div>

              {/* Total Amount */}
              <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
                <span className="font-bold text-gray-900">Total Amount</span>
                <span className="font-bold text-xl text-amber-700">₹{totalAmount}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="w-full bg-amber-700 text-white py-3 rounded-lg font-bold mb-4 hover:bg-amber-800 transition">
                  CHECKOUT
                </button>
              </Link>

              {/* Coupon Section */}
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm">Available Coupon</h3>
                  {appliedCoupon && (
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-gray-600 hover:text-red-500"
                    >
                      REMOVE
                    </button>
                  )}
                </div>

                {appliedCoupon ? (
                  <div className="flex items-center gap-2 bg-white border border-green-500 rounded p-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm font-medium text-green-600">{appliedCoupon.code}</span>
                    <span className="text-xs text-green-600 ml-auto">₹{appliedCoupon.discount} off on order</span>
                  </div>
                ) : showCouponInput ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-2 py-2 border border-gray-300 rounded text-xs focus:outline-none"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-3 py-2 bg-amber-700 text-white rounded text-xs font-medium hover:bg-amber-800"
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowCouponInput(true)}
                    className="text-xs text-amber-700 font-medium hover:underline"
                  >
                    Have a coupon code?
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
