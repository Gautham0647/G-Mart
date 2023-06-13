export const initialCartState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return [...action.payload];
    }
    case "DELETE": {
      return [...action.payload];
    }
    case "decrement": {
      console.log(action.payload);
      return [...action.payload];
    }
    case "increment": {
      console.log(action.payload);
      return [...action.payload];
    }

    case "ADD-TO-CART": {
      // check if product exists
      const existingProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        // if product exists increase product count
        // remove existing product from cart
        // const newState = state.filter(product => product._id !== action.payload._id)
        // update count of existing product
        // existingProduct.count = existingProduct.count + 1
        // add existing product with updated count into cart
        return [
          ...state.map((product) => ({
            ...product,
            count:
              product._id === action.payload._id
                ? product.qty + 1
                : product.qty,
          })),
        ];
        // return new cart
      } else {
        // else
        // set product count value 1
        // add product to the new cart
        // return new cart
        return [...state, { ...action.payload, qty: 1 }];
      }
    }
    case "DECREASE-FROM-CART": {
      // check if product exists
      return [
        ...state.map((product) => ({
          ...product,
          count:
            product._id === action.payload._id ? product.qty - 1 : product.qty,
        })),
      ];
      // return [
      //   ...state.filter((product) => product._id !== action.payload._id),
      //   { ...action.payload, count: action.payload.count - 1 },
      // ];
    }
    case "REMOVE-FROM-CART": {
      return [
        ...state.filter((product) => {
          return product._id !== action.payload;
        }),
      ];
    }

    default:
      return state;
  }
};
