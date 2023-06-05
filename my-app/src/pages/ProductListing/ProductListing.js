import React from "react";
import { useData } from "../../Context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductListing.css";
import { useFilter } from "../../Context/FilterContext";
import { Filter } from "../../components/Filter/Filter";
//import { filterReducer } from "../../Reducer/FilterReducer";

const ProductListing = () => {
  const { products } = useData();
  const { filterState } = useFilter();

  const filterProducts = (products, filterState) => {
    const { priceRange, rating, category, search, sort } = filterState;
    let filteredProducts = [...products];
    if (priceRange !== 150000) {
      filteredProducts = filteredProducts.filter(
        (product) => product.orignalPrice <= priceRange
      );
    }
    if (rating > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= rating
      );
    }
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        category.includes(product.categoryName)
      );
    }
    if (sort === "Increase") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.orignalPrice - b.orignalPrice
      );
    }
    if (sort === "Decrease") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.orignalPrice - a.orignalPrice
      );
    }
    if (search.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase() )||
        product.categoryName.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredProducts;
  };
  const filteredProducts = filterProducts(products, filterState);

  return (
    <div className="product-container">
     
     <Filter/>

      <div className="product-list-container">
      <h1>
          Showing All Products
          <span> ({filteredProducts.length} products)</span>
        </h1>
        <div className="products-card-container">
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                product={product}
                add={true}
                move={false}
                key={product._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
