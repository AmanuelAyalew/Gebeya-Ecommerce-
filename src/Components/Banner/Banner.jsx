import React from "react";
import e5 from "../../images/category/earphone.png";
import e6 from "../../images/category/vr.png";
import e7 from "../../images/category/gaming.png";
import e8 from "../../images/category/speaker.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img src={e5} alt="" className="bannerimages" />
        <img src={e6} alt="" className="bannerimages" />
        <img src={e7} alt="" className="bannerimages" />
        <img src={e8} alt="" className="bannerimages" />
      </div>
    </div>
  );
};

export default Banner;
