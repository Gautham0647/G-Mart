import React from "react";
import { useData } from "../../Context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductListing.css";
import { useFilter } from "../../Context/FilterContext";
import { filterReducer } from "../../Reducer/FilterReducer";

const ProductListing = () => {
  const { products } = useData();
  const { filterState, filterDispatch } = useFilter();

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

    return filteredProducts;
  };
  const filteredProducts = filterProducts(products, filterState);

  return (
    <div>
      <div>
        Filter
        <div>
          FilterByPrice 0
          <input
            type="range"
            min="0"
            max="15000"
            step="200"
            value={filterState.priceRange}
            defaultValue="15000"
            onChange={(e) =>
              filterDispatch({ type: "PRICE-RANGE", payload: e.target.value })
            }
          />
          15000
        </div>
        <div>
          <h2>categories </h2>
          <label>
            <input
              type="checkbox"
              onClick={() =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: "Contcentrated Perfumes",
                })
              }
            />
            Contcentrated Perfumes
          </label>
          <label>
            <input
              type="checkbox"
              onClick={() =>
                filterDispatch({ type: "CATEGORY", payload: "Body Mist" })
              }
            />
            Body Mist
          </label>
          <label>
            <input
              type="checkbox"
              onClick={() =>
                filterDispatch({ type: "CATEGORY", payload: "Deodorant" })
              }
            />
            Deodorant
          </label>
          <label>
            <input
              type="checkbox"
              onClick={() =>
                filterDispatch({ type: "CATEGORY", payload: "Home Fragrances" })
              }
            />
            Home Fragrances
          </label>
        </div>
        <div>
          <h2>Rating</h2>
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => filterDispatch({ type: "RATING", payload: 4 })}
            />
            4 star and above
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => filterDispatch({ type: "RATING", payload: 3 })}
            />
            3 star and above
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => filterDispatch({ type: "RATING", payload: 2 })}
            />
            2 star and above
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => filterDispatch({ type: "RATING", payload: 1 })}
            />
            1 star and above
          </label>
        </div>
        <div>
          <h2>Sort by Price</h2>
          <label>
            <input
              type="radio"
              onClick={() =>
                filterDispatch({ type: "SORT-BY-PRICE", payload: "Increase" })
              }
              name="price"
            />
            Low-to-high
          </label>
          <label>
            <input
              type="radio"
              onClick={() =>
                filterDispatch({ type: "SORT-BY-PRICE", payload: "Decrease" })
              }
              name="price"
            />{" "}
            High-to-low
          </label>
        </div>
        <div></div>
      </div>

      <div className="main">
        <h3>Showing All Products</h3>
        <div className="products_container">
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
