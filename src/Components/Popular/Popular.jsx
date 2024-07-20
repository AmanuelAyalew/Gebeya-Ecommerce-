import React, { useEffect, useContext } from "react";
import items from "../../data/index";
import Product from "../Product/Product";
import "./Popular.css";
import { ShopContext } from "../../Context/Shopcontext";
import { Link } from "react-router-dom";

const Popular = ({ productItems }) => {
  const { addtocart, quantity } = useContext(ShopContext);
  useEffect(() => {}, [productItems]);
  if (productItems.length === 0) {
    return <h1 className="not-found">Product Not Found !!</h1>;
  }
  return (
    <div>
      <div className="popular">
        {productItems.map((item, index) => {
          return (
            <div>
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
                  Add to Cart
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
