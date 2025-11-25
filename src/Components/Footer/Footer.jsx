import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 px-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Column 1: Brand - 4 cols */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link to="/" className="text-3xl font-bold text-secondary mb-6 block">
              e-shop<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Elevate your tech gadget game with our premium selection of electronics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Company - 2 cols */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h3 className="text-lg font-bold text-secondary mb-6">Company</h3>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Help - 2 cols */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h3 className="text-lg font-bold text-secondary mb-6">Help</h3>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/support" className="hover:text-primary transition-colors">Customer Support</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter - 4 cols */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h3 className="text-lg font-bold text-secondary mb-6">Stay Updated</h3>
            <p className="text-gray-500 mb-6">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-100 px-4 py-3 rounded-l-md outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-red-600 transition-colors">
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 e-shop. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
