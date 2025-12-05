import React, { createContext, useState } from "react";
import items from "../data/index";

export const ShopContext = createContext();

const getdefaultcart = () => {
  const cart = {};
  for (let i = 0; i < items.length; i++) {
    cart[items[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [Cartitems, setCartitems] = useState(getdefaultcart());
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const addtocart = (itemid, qty = 1) => {
    setCartitems((prev) => ({ ...prev, [itemid]: (prev[itemid] || 0) + qty }));
  };

  const removetocart = (itemid, qty = 1) => {
    setCartitems((prev) => ({
      ...prev,
      [itemid]: Math.max((prev[itemid] || 0) - qty, 0),
    }));
  };

  const removeItem = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: 0 }));
  };

  const calcTotal = () => {
    let total = 0;
    items.forEach((product) => {
      const qty = Cartitems[product.id] || 0;
      if (qty > 0) total += product.price * qty;
    });
    return total;
  };

  const contextvalue = {
    getdefaultcart,
    quantity,
    setQuantity,
    handleQuantityChange,
    items,
    Cartitems,
    addtocart,
    removetocart,
    removeItem,
    calcTotal,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
