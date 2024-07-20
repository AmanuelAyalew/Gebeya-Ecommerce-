import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/Shopcontext";
import CartItem from "../Components/CartItem/CartItem";
import CartSummary from "../Components/CartSummary/CartSummary";
import EmptyCart from "../Components/EmptyCart/EmptyCart";
import "./pages.css";
import items from "../data/index";
import Product from "../Components/Product/Product";

const Cart = () => {
  const { quantity, items, Cartitems } = useContext(ShopContext);

  const [Cart, setCart] = useState(<CartItem />);

  return (
    <div className="cartdisplay">
      {Cart}
      <CartSummary />
    </div>
  );
};

export default Cart;
