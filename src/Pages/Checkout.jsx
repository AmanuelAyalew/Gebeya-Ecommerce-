import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/Shopcontext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { calcTotal } = useContext(ShopContext);
  const navigate = useNavigate();
  const subtotal = calcTotal();
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postal: "",
    email: "",
  });

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!form.name || !form.address || !form.email) {
      alert("Please fill required fields.");
      return;
    }
    // For demo, we'll just show a confirmation and redirect to homepage
    alert(`Order placed. Total: $${subtotal.toFixed(2)}`);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-30 py-10">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
          <form
            onSubmit={handlePlaceOrder}
            className="space-y-4 bg-white p-6 rounded shadow"
          >
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Postal Code</label>
                <input
                  name="postal"
                  value={form.postal}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded">
              Place Order
            </button>
          </form>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2 text-gray-600">
              {" "}
              <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-600">
              {" "}
              <span>Shipping</span> <span>$9.99</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              {" "}
              <span>Tax</span> <span>${(subtotal * 0.07).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              {" "}
              <span>Total</span>{" "}
              <span>${(subtotal + 9.99 + subtotal * 0.07).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
