import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import { Link, useNavigate } from "react-router-dom";

const CartSummary = () => {
  const { items, Cartitems, calcTotal } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = calcTotal();
  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = +(subtotal * 0.07).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-base mb-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button
        className="w-full bg-primary text-white py-2 rounded mb-3"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
      <Link
        to="/Allproducts"
        className="w-full block text-center text-sm text-primary"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
