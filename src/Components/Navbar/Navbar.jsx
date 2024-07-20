import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import "./Navbar.css";
import logo from "../../images/icons/logo.png";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder.png";
import items from "../../data";

const Navbar = () => {
  const { Cartitems } = useContext(ShopContext);

  let totalitems = 0;
  items.map((product, index) => {
    if (Cartitems[product.id] > 0) {
      return <div key={index}>{(totalitems += Cartitems[product.id])}</div>;
    }
  });

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <div className="home">
        <Link className="navlinks" to="/">
          Home
        </Link>
        <Link className="navlinks" to="/Allproducts">
          Products
        </Link>
        <Link className="navlinks">About</Link>
        <Link className="navlinks">Contact</Link>
      </div>
      <Link to="/Cart">
        <div className="addtocarticon">
          <h2 className="itemsaddtocart">{totalitems}</h2>
        </div>
        <img className="cart" src={placeholder} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
