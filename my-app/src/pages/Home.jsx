// import React, { useEffect } from 'react'

import Banner from "../components/Banner";
import "./Home.css";



const Home = ({categories}) => {
  
  return (
    <div>
      <Banner />
      <section className ="section-Category">
        <h2 className="header"> Product Categories</h2>
        <ul className="categories-item">
        {
          categories.map((item,i) => (
            <li key={i}>
              {item.categoryName}
              <img  src={item.url} alt="random"/>
            </li>
          ))
        }
          
        </ul>
      </section>
    </div>
  );
};

export default Home;
