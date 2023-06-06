export const initialState = {
  products: [],
  categories: [],
  selectedCategory: [],
  searchValue: "",
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    default:
      return { ...state };
  }
};
