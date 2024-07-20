import React from "react";
import "./hero.css";
import e4 from "../../images/hero/headphone.png";

//hero
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={e4} alt="" className="herobanner" />
      </div>
      <div className="herotitles">
        <h1 className="herotitle">Gebeya</h1>
        <h1 className="herotitletwo">50% OFF</h1>
      </div>
    </>
  );
};

export default Hero;
