import React from "react";
import heroImage from "../../images/hero/headphone.png";
import miniWatch from "../../images/hero/watch.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-sky-50 via-white to-indigo-50 py-14 md:py-24">
        <div className="container px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 items-center gap-6">
            {/* Left */}
            <div className="col-span-12 md:col-span-6">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full mb-6 shadow-sm">
                <span className="text-xs font-semibold text-primary">New</span>
                <span className="text-xs text-gray-600">
                  Free shipping over $99
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-4">
                Elevate your <span className="text-primary">Tech</span>{" "}
                experience
                <br /> with curated gadgets
              </h1>

              <p className="text-gray-600 mb-6 max-w-xl">
                Discover the latest headphones, laptops and accessories —
                handpicked for performance and style. Limited-time offers and
                exclusive bundles available.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/Allproducts"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow hover:opacity-95 transition"
                >
                  Shop Now
                </a>
                <a
                  href="/Allproducts"
                  className="inline-block border border-gray-200 px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 transition"
                >
                  Explore Collections
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-semibold">30-day returns</div>
                    <div className="text-xs text-gray-500">Hassle-free</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Fast shipping</div>
                    <div className="text-xs text-gray-500">Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - image + floating cards */}
            <div className="col-span-12 md:col-span-6 relative flex justify-center md:justify-end">
              <div className="relative w-[360px] md:w-[420px] lg:w-[520px]">
                <div className="rounded-3xl bg-white p-6 shadow-2xl transform -translate-y-4">
                  <img
                    src={heroImage}
                    alt="headphones"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* floating mini card 1 */}
                <div className="floating-card left-0 top-6">
                  <img
                    src={miniWatch}
                    alt="watch"
                    className="w-14 h-14 object-contain"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-semibold">Smart Watch</div>
                    <div className="text-xs text-gray-500">from $79</div>
                  </div>
                </div>

                {/* floating mini card 2 */}
                <div className="floating-card right-0 bottom-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary font-semibold">
                    NEW
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold">
                      Wireless Earbuds
                    </div>
                    <div className="text-xs text-gray-500">best seller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative SVG wave */}
      <svg
        className="absolute left-0 bottom-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C200,80 400,0 720,40 C1040,80 1240,20 1440,40 L1440 80 L0 80 Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default Hero;
