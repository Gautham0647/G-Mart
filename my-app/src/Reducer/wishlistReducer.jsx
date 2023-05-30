export const initialWishlistState = [];

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO WISHLIST":
   const existingProduct = state.find((product) => product.id === action.payload.id );
 if(existingProduct) {
    return [ ...state.filter((product) => product.id !==action.payload.id),existingProduct]
 }else {
    return [...state,{...action.payload}];
 }

    case "REMOVE-FROM-WISHLIST":
      return [
        ...state.filter((product) => {
          return product.id !== action.payload;
        }),
      ];

    default:
      return state;
  }
};
