import React, { useContext } from "react";
import { ShopContext } from "../Context/Shopcontext";
import CartItem from "../Components/CartItem/CartItem";
import CartSummary from "../Components/CartSummary/CartSummary";
import EmptyCart from "../Components/EmptyCart/EmptyCart";
import "./pages.css";

const Cart = () => {
  const { items, Cartitems } = useContext(ShopContext);
  // determine if cart has any items
  const hasItems = items.some((p) => (Cartitems[p.id] || 0) > 0);
  return (
    <div className="container mx-auto px-30  py-10">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
          {!hasItems ? <EmptyCart /> : <CartItem />}
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
