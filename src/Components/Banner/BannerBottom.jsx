import React from "react";
import { FiTruck, FiHeadphones, FiTag } from "react-icons/fi";

const BannerBottom = () => {
  return (
    <div className="container py-12 px-40">
      <div className="grid grid-cols-12 gap-6">
        {/* Item 1 */}
        <div className="col-span-12 md:col-span-4 flex items-center gap-4 bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
          <FiTruck size={40} className="text-primary" />
          <div>
            <h3 className="font-bold text-lg text-secondary">Free Shipping</h3>
            <p className="text-gray-500 text-sm">Special for orders over $100</p>
          </div>
        </div>
        {/* Item 2 */}
        <div className="col-span-12 md:col-span-4 flex items-center gap-4 bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
          <FiHeadphones size={40} className="text-primary" />
          <div>
            <h3 className="font-bold text-lg text-secondary">24/7 Support</h3>
            <p className="text-gray-500 text-sm">Free shipping worldwide</p>
          </div>
        </div>
        {/* Item 3 */}
        <div className="col-span-12 md:col-span-4 flex items-center gap-4 bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
          <FiTag size={40} className="text-primary" />
          <div>
            <h3 className="font-bold text-lg text-secondary">20% Discount</h3>
            <p className="text-gray-500 text-sm">For your first purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
