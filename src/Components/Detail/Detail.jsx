import React, { useContext, useState } from "react";
import "./Detail.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Shopcontext";

import Banner from "../Banner/Banner";
import BestSeller from "../BestSeller/Bestseller";

const Detail = ({ allproducts }) => {
  const { addtocart, handleQuantityChange, quantity } = useContext(ShopContext);

  return (
    <>
      <div className="detail">
        <div className="detailimages1">
          <div className="imageslist">
            <div className="imageslists">
              <img className="detailimage" src={allproducts.src} alt="" />
              <img className="detailimage" src={allproducts.src} alt="" />
              <img className="detailimage" src={allproducts.src} alt="" />
            </div>
            <img className="detailimagemain" src={allproducts.src} alt="" />
          </div>
        </div>
        <div className="info">
          <h2 className="detailname">{allproducts.name}</h2>
          <div className="rate">
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div>
            <span className="priceinfo ">Price:${allproducts.price}</span>
            <span className="catagoryinfo ">
              Category:{allproducts.category}
            </span>
          </div>
          <h2 className="detailtext">{allproducts.shortDesc}</h2>
          <input
            className="qty-input"
            type="number"
            placeholder="Qty"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <Link to="/cart">
            <button
              onClick={() => addtocart(allproducts.id, quantity)}
              className="detailaddtocart"
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
      <div className="detailBanner">
        <h2 className="NewCollectionsTitle ">New Collections</h2>
        <BestSeller />
        <Banner />
      </div>
    </>
  );
};

export default Detail;
