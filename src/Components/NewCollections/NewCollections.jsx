import React, { useContext } from "react";
import items from "../../data/index";
import Product from "../Product/Product";
import "./NewCollections.css";
import { ShopContext } from "../../Context/Shopcontext";
import { Link } from "react-router-dom";

const NewCollections = () => {
  const { addtocart, quantity, setQuantity } = useContext(ShopContext);
  setQuantity(1);

  return (
    <div>
      <div className="NewCollections">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <Product
                key={index}
                id={item.id}
                src={item.src}
                name={item.name}
                price={item.price}
              />
              <Link to="/cart">
                <button
                  onClick={() => addtocart(item.id, quantity)}
                  className="addtocart"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
