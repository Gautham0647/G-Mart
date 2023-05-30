

export const initialCartState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      // check if product exists
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        // if product exists increase product count
        // remove existing product from cart
        // const newState = state.filter(product => product.id !== action.payload.id)
        // update count of existing product
        // existingProduct.count = existingProduct.count + 1
        // add existing product with updated count into cart
        return [
          ...state.filter((product) => product.id !== action.payload.id),
          { ...existingProduct, count: existingProduct.count + 1 },
        ];
        // return new cart
      } else {
        // else
        // set product count value 1
        // add product to the new cart
        // return new cart
        return [...state, { ...action.payload, count: 1 }];
      }
    case "REMOVE-FROM-CART":
      console.log(action.payload)
      return [...state.filter(product => {
        // console.log(product.id, 'map')
        return product.id !== action.payload;
      })];

    default:
      return state;
  }
};
