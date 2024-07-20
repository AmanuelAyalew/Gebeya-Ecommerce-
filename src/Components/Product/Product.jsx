import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { items } = useContext(ShopContext);
  return (
    <div className="popularproducts">
      <Link to={`/display/${props.id}`}>
        <img className="image" src={props.src} alt="" />
      </Link>
      <div>
        <h2 className="text">{props.name}</h2>
        <h2 className="pricetext">${props.price}</h2>
      </div>
    </div>
  );
};

export default Product;
