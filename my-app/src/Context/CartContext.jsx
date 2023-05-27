import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../Reducer/CartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
    
  const [cart, cartDispatch] = useReducer(cartReducer, initialCartState);


  return <CartContext.Provider value={{cart,cartDispatch}}
  >{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
