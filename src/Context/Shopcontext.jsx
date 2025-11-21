import React, { createContext, useState } from "react";
import items from "../data/index";
import Display from "../Pages/Display";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const getdefaultcart = () => {
  let cart = {};
  1;

  for (let index = 0; index <= items.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [Cartitems, setCartitems] = useState(getdefaultcart());
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const addtocart = (itemid, quantity) => {
    setCartitems((prev) => ({
      ...prev,
      [itemid]: prev[itemid] + 1 * quantity,
    }));
    console.log(Cartitems.price);
  };

  const removetocart = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const clacTotal = () => {
    let totalamount = 0;
    items.map((product, index) => {
      if (Cartitems[product.id] > 0) {
        return (
          <div key={index}>
            {(totalamount += product.price * Cartitems[product.id])}
          </div>
        );
      }
    });

    return (
      <div>
        <h2>{totalamount}</h2>
      </div>
    );
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
    clacTotal,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
