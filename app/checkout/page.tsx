"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Address {
  id: number;
  type: "Home" | "Office";
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

export default function CheckoutPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      type: "Home",
      street: "Akshil Vihar, 342 Unique Ridge Lane, Apt 305, Toronto, Ontario - 1848 851",
      city: "Toronto",
      state: "Ontario",
      pincode: "1848 851",
      phone: "+1-647-555-0108",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      street: "Akshil Vihar, 342 Unique Ridge Lane, Apt 305, Toronto, Ontario - 1848 851",
      city: "Toronto",
      state: "Ontario",
      pincode: "1848 851",
      phone: "+1-647-555-0108",
      isDefault: false,
    },
  ]);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    addresses.find((a) => a.isDefault)?.id || null
  );
  const [formData, setFormData] = useState({
    type: "Home" as "Home" | "Office",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const handleAddAddress = () => {
    if (
      formData.street &&
      formData.city &&
      formData.state &&
      formData.pincode &&
      formData.phone
    ) {
      const newAddress: Address = {
        id: Date.now(),
        ...formData,
        isDefault: addresses.length === 0,
      };
      setAddresses([...addresses, newAddress]);
      setFormData({
        type: "Home",
        street: "",
        city: "",
        state: "",
        pincode: "",
        phone: "",
      });
      setShowAddressForm(false);
    }
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    if (selectedAddressId === id) {
      setSelectedAddressId(addresses[0]?.id || null);
    }
  };

  const handleSetDefault = (id: number) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
    setSelectedAddressId(id);
  };

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
        <span className="font-bold">Checkout</span>
      </div>

      {/* Main Checkout Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Address Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border-4 border-blue-400 p-6">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 font-semibold text-gray-900 px-4 py-2 bg-amber-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span>Addresses</span>
                </div>
              </div>

              {/* Addresses List */}
              <div className="space-y-4 mb-6">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                      selectedAddressId === address.id
                        ? "border-amber-700 bg-amber-50"
                        : "border-gray-200 hover:border-amber-400"
                    }`}
                    onClick={() => setSelectedAddressId(address.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {address.type}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {address.street}
                        </p>
                        <p className="text-xs text-gray-600">
                          {address.city}, {address.state} - {address.pincode}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Contact: {address.phone}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddressId === address.id}
                          onChange={() => setSelectedAddressId(address.id)}
                          className="w-5 h-5 accent-amber-700"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 pt-3 border-t border-gray-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSetDefault(address.id);
                        }}
                        className="text-xs font-semibold text-amber-700 hover:text-amber-800"
                      >
                        {address.isDefault ? "✓ Default" : "Set as Default"}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteAddress(address.id);
                        }}
                        className="text-xs font-semibold text-red-600 hover:text-red-800 ml-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Address Button */}
              {!showAddressForm && (
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="w-full border-2 border-dashed border-amber-700 text-amber-700 py-3 rounded-lg font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-2"
                >
                  <span className="text-xl">+</span>
                  <span>Add New Address</span>
                </button>
              )}

              {/* Add Address Form */}
              {showAddressForm && (
                <div className="border-2 border-amber-700 rounded-lg p-6 bg-amber-50">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Add New Address
                  </h3>
                  <div className="space-y-4">
                    {/* Address Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Address Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            type: e.target.value as "Home" | "Office",
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                      >
                        <option>Home</option>
                        <option>Office</option>
                      </select>
                    </div>

                    {/* Street */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder="Enter street address"
                        value={formData.street}
                        onChange={(e) =>
                          setFormData({ ...formData, street: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                      />
                    </div>

                    {/* City & State */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          placeholder="State"
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                      </div>
                    </div>

                    {/* Pincode & Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Pincode
                        </label>
                        <input
                          type="text"
                          placeholder="Pincode"
                          value={formData.pincode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              pincode: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleAddAddress}
                        className="flex-1 bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-800 transition"
                      >
                        Save Address
                      </button>
                      <button
                        onClick={() => setShowAddressForm(false)}
                        className="flex-1 bg-gray-300 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
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

              {/* Continue Button */}
              <button className="w-full bg-amber-700 text-white py-3 rounded-lg font-bold hover:bg-amber-800 transition">
                CONTINUE
              </button>

              {/* Order Items Preview */}
              <div className="mt-6 space-y-3">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Items in Order
                </h3>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/categories/rudra.jpg"
                      alt="Product"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-900 truncate">
                      2 Mukhi Bracelet - Almonds Warmth & Natural Chemical
                    </p>
                    <p className="text-xs text-gray-600">Qty: 1</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900 flex-shrink-0">
                    ₹3,500
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/categories/rudra.jpg"
                      alt="Product"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-900 truncate">
                      2 Mukhi Bracelet - Almonds Warmth & Natural Chemical
                    </p>
                    <p className="text-xs text-gray-600">Qty: 1</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900 flex-shrink-0">
                    ₹3,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
