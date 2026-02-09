"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddressPage({ addresses }) {

  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleCheckout = () => {

    if (!selectedAddress) {
      alert("Please select address");
      return;
    }

    localStorage.setItem(
      "selectedAddress",
      JSON.stringify(selectedAddress)
    );

    router.push("/payment");
  };

  return (
    <>
      {addresses.map((item) => (
        <div key={item._id}>
          <input
            type="radio"
            name="address"
            onChange={() => setSelectedAddress(item)}
          />

          {item.fullName}, {item.city}
        </div>
      ))}

      <button onClick={handleCheckout}>
        Checkout
      </button>
    </>
  );
}
