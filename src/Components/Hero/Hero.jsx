import React from "react";
import heroImage from "../../images/hero/headphone.png";

const Hero = () => {
    return (
        <div className="bg-blue-50 py-12 md:py-20">
            <div className="container grid grid-cols-12 items-center gap-6">
                {/* Text Content - 6 cols */}
                <div className="col-span-12 md:col-span-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 leading-tight">
                        Elevate Your <br />
                        <span className="text-primary">Tech Gadget</span> Game
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                        Shop the latest technology available here in e-shop. Sale & discount offers everyday.
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors shadow-lg shadow-primary/30">
                        Shop Now
                    </button>
                </div>

                {/* Image - 6 cols */}
                <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end relative">
                    <img
                        src={heroImage}
                        alt="Tech Gadgets"
                        className="max-w-full h-auto object-contain max-h-[500px] drop-shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

