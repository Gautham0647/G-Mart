import { createContext, useContext, useReducer } from "react";
import {
  wishlistReducer,
  initialWishlistState,
} from "../Reducer/wishlistReducer";
const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );
  return (
    <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);


