import React from "react";

import phone from "../../images/Banner/Phone.png";
import laptop from "../../images/Banner/laptop.png";
import headphone from "../../images/Banner/headsphone.jpg";
const Banner = () => {
  return (
    <div className="container py-12 px-20">
      <div className="grid grid-cols-12 gap-6">
        {/* Card 1 */}
        <div className="col-span-12 md:col-span-4 bg-gray-100 h-64 rounded-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-xl p-4 text-white"
            style={{ backgroundImage: `url(${phone})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Smart Phones</h3>
              <button className="text-primary font-medium hover:underline">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-span-12 md:col-span-4 bg-gray-100 h-64 rounded-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          <div
            className="absolute  w-full h-full bg-cover bg-center rounded-xl p-4 text-white"
            style={{ backgroundImage: `url(${headphone})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Headphones</h3>
              <button className="text-primary font-medium hover:underline">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-span-12 md:col-span-4 bg-gray-100 h-64 rounded-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-xl p-4 text-white"
            style={{ backgroundImage: `url(${laptop})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Laptops</h3>
              <button className="text-primary font-medium hover:underline">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
