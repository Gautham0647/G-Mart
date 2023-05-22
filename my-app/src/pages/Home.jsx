// import React, { useEffect } from 'react'

import Banner from "../components/Banner";
import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import "./Home.css";



const Home = ({categories}) => {
  
  return (
    <div>
      <Banner />
      <section className ="section-Category">
        <h2 className="header"> Product Categories</h2>
        <CategoryCard/>
      </section>
    </div>
  );
};

export default Home;
