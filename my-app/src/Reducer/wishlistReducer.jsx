export const initialWishlistState = [];

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-WISHLIST": {
      return [...action.payload];
    }
    case "DELETE-WISHLIST": {
      return [...action.payload];
    }

    case "ADD TO WISHLIST":
      const existingProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        return [
          ...state.filter((product) => product._id !== action.payload._id),
          existingProduct,
        ];
      } else {
        return [...state, { ...action.payload }];
      }

    case "REMOVE-FROM-WISHLIST":
      return [
        ...state.filter((product) => {
          return product._id !== action.payload;
        }),
      ];

    default:
      return state;
  }
};
