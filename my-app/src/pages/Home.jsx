import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { Footer } from "../components/Footer";
import Spinner from "../components/Loader";
import "./Home.css";

const Home = ({ categories }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 400);
  }, []);
  return (
    <div>
      <Banner />
      <section className="section-Category">
        <h2 className="header"> Product Categories</h2>
        <CategoryCard />
      </section>
      <Footer />
      {loader ? (
        <div className="pos-center">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
