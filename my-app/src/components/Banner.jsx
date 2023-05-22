import React from "react";
import banner from "../collections/Banner1.png";
import "./Banner.css"


const Banner = () => {
  return (
    <div className="banner-img-box">
      <img className="banner-img" src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
