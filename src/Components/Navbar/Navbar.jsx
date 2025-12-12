import React, { useState } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiMenu,
  FiChevronDown,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  const { Cartitems } = useContext(ShopContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  let totalitems = 0;
  // Calculate total items safely
  if (Cartitems) {
    Object.values(Cartitems).forEach((count) => {
      if (count > 0) totalitems += count;
    });
    return (
      <div className="font-sans ml-20 mr-20">
        {/* Top Bar */}
        <div className="bg-primary text-white text-xs py-2 px-20">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <FiMail /> info@eshop.com
              </span>
              <span className="flex items-center gap-1">
                <FiPhone /> +123 456 7890
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 cursor-pointer">
                USD <FiChevronDown />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                English <FiChevronDown />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                {/* Auth area */}
                {(() => {
                  const { currentUser, logout } = useContext(AuthContext);
                  if (currentUser) {
                    return (
                      <div className="flex items-center gap-3">
                        <span className="text-sm">Hi, {currentUser.name}</span>
                        <button onClick={logout} className="text-sm underline">
                          Logout
                        </button>
                      </div>
                    );
                  }
                  return (
                    <div className="flex items-center gap-3">
                      <a href="/login" className="flex items-center gap-1">
                        <FiUser /> Login
                      </a>
                      <a href="/signup" className="ml-2 text-sm">
                        Sign Up
                      </a>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bar */}
        <div className="bg-white py-4 border-b">
          <div className="container grid grid-cols-12 items-center gap-6">
            {/* Logo - 2 cols */}
            <Link
              to="/"
              className="col-span-12 md:col-span-3 lg:col-span-2 text-3xl font-bold text-secondary"
            >
              e-shop<span className="text-primary">.</span>
            </Link>

            {/* Search Bar - 6 cols */}
            <div className="col-span-12 md:col-span-6 lg:col-span-7 relative">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <div
                  className="hidden md:flex px-2 align-left justify-center py-2 bg-gray-50 
            text-gray-500 text-sm border-r cursor-pointer items-center "
                >
                  All Category <FiChevronDown />
                </div>
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="w-[100px] px-4 py-2 outline-none text-sm"
                />
                <button className="text-grey px-6 py-2 hover:bg-primary transition-colors">
                  <FiSearch size={18} />
                </button>
              </div>
            </div>

            {/* Icons - 4 cols */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3 flex items-center justify-end gap-6 text-secondary">
              <div className="flex flex-col items-center cursor-pointer hover:text-primary transition-colors">
                <div className="relative">
                  <FiHeart size={24} />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="text-xs mt-1">Wishlist</span>
              </div>
              <Link
                to="/Cart"
                className="flex flex-col items-center cursor-pointer hover:text-primary transition-colors"
              >
                <div className="relative">
                  <FiShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalitems}
                  </span>
                </div>
                <span className="text-xs mt-1">Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Navigation) */}
        <div className="bg-primary text-white">
          <div className="container flex items-center justify-between h-12">
            {/* Categories Dropdown */}
            <div className="relative h-full">
              <button
                className="flex items-center gap-2 bg-black/10 h-full px-6 font-medium hover:bg-black/20 transition-colors"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <FiMenu size={40} />
                All Categories
                <FiChevronDown />
              </button>
              {/* Dropdown Content (Hidden for now) */}
            </div>

            {/* Main Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link to="/" className="hover:text-black/70 transition-colors">
                Home
              </Link>
              <Link
                to="/Allproducts"
                className="hover:text-black/70 transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/blog"
                className="hover:text-black/70 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-black/70 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/admin"
                className="hover:text-black/70 transition-colors"
              >
                Admin
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden md:block text-sm font-medium">
              Limited Sale Offer!
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Navbar;
