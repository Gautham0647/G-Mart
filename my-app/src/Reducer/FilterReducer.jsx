export const initialFilter = {
  priceRange: 15000,
  category: [],
  rating: 0,
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
      //console.log(newCategory);
      return {
        ...state,
        category: newCategory,
      };
    case "SORT-BY-PRICE":
      return { ...state, sort: action.payload };

    case "SEARCH-VALUE":
        return {...state, search:action.payload};
        
    default:
      return state;
  }
};
