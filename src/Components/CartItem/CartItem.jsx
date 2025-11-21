import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import "./CartItem.css";
import CartSummary from "../CartSummary/CartSummary";

const CartItem = () => {
  const { items, Cartitems, removetocart, clacTotal } = useContext(ShopContext);
  return (
    <div>
      {items.map((item, index) => {
        if (Cartitems[item.id] > 0) {
          return (
            <div key={index} className="cartitems">
              <div className="cartitemsimages">
                <img src={item.src} alt="" />
              </div>
              <div className="cartitemsdetail">
                <h2 className="cartitemslist">
                  {item.name} = ${item.price}
                </h2>

                <h2 className="cartitemslist">{item.shortDesc}</h2>
                {/* <h2 className="cartitemslist">
                  ${item.price}*{Cartitems[item.id]}=$
                  {item.price * Cartitems[item.id]}
                </h2> */}
              </div>
              <button
                className="removebutton"
                onClick={() => {
                  removetocart(item.id);
                }}
              >
                remove
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItem;
