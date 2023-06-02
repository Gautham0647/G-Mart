import React from "react";
import { Link } from "react-router-dom";

import banner from "../collections/Banner1.png";
import "./Banner.css"


const Banner = () => {
  return (
    <div className="banner-img-box">
    <Link to="/products">
      <img className="banner-img" src={banner} alt="banner" />
      </Link>
    </div>
  );
};

export default Banner;
