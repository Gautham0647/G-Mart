import { useFilter } from "../../Context/FilterContext";
import "./Filter.css";

export function Filter() {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className="filter-container">
      <div className="heading-container">
        <h2>Filters</h2>
        <p
          className="clear"
          onClick={() => filterDispatch({ type: "CLEAR-FILTERS" })}
        >
          <u>Clear</u>
        </p>
      </div>
      <p className="filter-title">Price:</p>
      <div className="slider-value-container">
        <p>500</p>
        <p>5000</p>
        <p>15000</p>
      </div>

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

      
      <p className="filter-title">Category:</p>
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
      
      
        
        <p className="filter-title">Rating:</p>
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
      
      
        
        <p className="filter-title">Sort by Price:</p>
        <label>
          <input
            type="radio"
            onClick={() =>
              filterDispatch({ type: "SORT-BY-PRICE", payload: "Increase" })
            }
            name="price"
          />
          Price-Low-High
        </label>
        <label>
          <input
            type="radio"
            onClick={() =>
              filterDispatch({ type: "SORT-BY-PRICE", payload: "Decrease" })
            }
            name="price"
          />{" "}
          Price-High-Low
        </label>
      
      
    </div>
  );
}