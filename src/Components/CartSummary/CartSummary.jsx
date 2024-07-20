import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import "./CartSummary.css";

const CartSummary = () => {
  const { items, Cartitems, removetocart, clacTotal } = useContext(ShopContext);
  return (
    <div className="cartdata">
      <div className="cart-total">
        <h2>Cart Summary</h2>
        <div className="TotalPrice">
          <h2>Total Price : $</h2>
          <h2>{clacTotal(items)}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
