import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import "./CartItem.css";

const CartItem = () => {
  const { items, Cartitems, addtocart, removetocart, removeItem } =
    useContext(ShopContext);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const qty = Cartitems[item.id] || 0;
        if (qty <= 0) return null;
        return (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white rounded-lg p-4 shadow"
          >
            <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
              <img src={item.src} alt={item.name} className="max-h-full" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.shortDesc}</p>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    className="px-3 py-1"
                    onClick={() => removetocart(item.id, 1)}
                  >
                    -
                  </button>
                  <div className="px-4">{qty}</div>
                  <button
                    className="px-3 py-1"
                    onClick={() => addtocart(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  Unit: ${item.price.toFixed(2)}
                </div>
                <div className="font-semibold">
                  Subtotal: ${(item.price * qty).toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                className="text-sm text-red-600"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
