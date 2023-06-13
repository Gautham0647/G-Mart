import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

import {
  wishlistReducer,
  initialWishlistState,
} from "../Reducer/wishlistReducer";
import { useAuth } from "./AuthContext";
const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { token } = useAuth();
  const [wishlist, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const addToWishlistHandler = (product) => {
    const addToWishlisttApi = async () => {
      try {
        //setLoader(true);
        const response = await fetch("/api/user/wishlist", {
          headers: {
            authorization: token,
          },
          method: "POST",
          body: JSON.stringify({ product }),
        });
        const { wishlist } = await response.json();
        console.log(wishlist);
        if (response.status === 201) {
          wishlistDispatch({ type: "UPDATE-WISHLIST", payload: wishlist });
        }
      } catch (err) {
        toast.error("Some Err");
      } finally {
        //setLoader(false);
      }
    };
    return addToWishlisttApi();
  };

  const removeFromWishlisthandler = (_id) => {
    const removeFromWishlistApi = async () => {
      try {
        const response = await fetch(`/api/user/wishlist/${_id}`, {
          headers: {
            authorization: token,
          },
          method: "DELETE",
        });

        console.log(response);
        const { wishlist } = await response.json();
        if (response.status === 200) {
          wishlistDispatch({
            type: "DELETE-WISHLIST",
            payload: wishlist,
          });
        }
      } catch {
        toast.error("Some Err");
      } finally {
      }
    };

    return removeFromWishlistApi();
  };


  return (
    <WishlistContext.Provider
      value={{ wishlist, wishlistDispatch, addToWishlistHandler,removeFromWishlisthandler }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
