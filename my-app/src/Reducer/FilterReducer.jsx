export const initialFilter = {
  priceRange: 15000,
  category: [],
  rating: "",
  sort: "",
  search: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE-RANGE":
      return { ...state, priceRange: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CATEGORY":
      let newCategory = [...state.category];
      if (state.category.includes(action.payload)) {
        newCategory = newCategory.filter((item) => item !== action.payload);
      } else {
        newCategory = [...newCategory, action.payload];
      }
      return {
        ...state,
        category: newCategory,
      };
    case "SORT-BY-PRICE":
      return { ...state, sort: action.payload };

    case "SEARCH-VALUE":
      return { ...state, search: action.payload };

    case "CLEAR-FILTERS":
      return initialFilter;

    default:
      return state;
  }
};
