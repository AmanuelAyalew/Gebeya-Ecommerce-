import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSend,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-8">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand + Social */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white mb-3 inline-block"
            >
              e-shop<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Curated tech products — fast shipping, fair prices.
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="Facebook"
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FiFacebook size={18} />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FiTwitter size={18} />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FiInstagram size={18} />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Allproducts"
                  className="hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/support"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <div className="text-gray-400 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FiPhone /> <span className="text-sm">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail /> <span className="text-sm">support@eshop.com</span>
              </div>
            </div>

            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-95 transition">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing you agree to our{" "}
              <Link to="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} e-shop. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-xs">Payments:</span>
              <img src="/visa.png" alt="visa" className="h-4 opacity-80" />
              <img
                src="/mastercard.png"
                alt="mastercard"
                className="h-4 opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
