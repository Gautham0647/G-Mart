import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

import { cartReducer, initialCartState } from "../Reducer/CartReducer";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [loader, setLoader] = useState();
  const { token } = useAuth();

  const [cart, cartDispatch] = useReducer(cartReducer, initialCartState);

  const addToCartApi = async (product) => {
    try {
      //setLoader(true);
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: token,
        },
        method: "POST",
        body: JSON.stringify({ product }),
      });
      const { cart: updatedCart } = await response.json();
      if (response.status === 201) {
        cartDispatch({ type: "UPDATE", payload: updatedCart });
        toast.success("Product Added to Cart")
      }
    } catch (err) {
      toast.error("Some Err");
    } finally {
      //setLoader(false);
    }
  };

  const removeFromCartHandler = (_id) => {
    const removeFromcartApi = async () => {
      try {
        const response = await fetch(`/api/user/cart/${_id}`, {
          headers: {
            authorization: token,
          },
          method: "DELETE",
        });

        console.log(response);
        const { cart } = await response.json();
        if (response.status === 200) {
          cartDispatch({
            type: "DELETE",
            payload: cart,
          });
        }
      } catch {
        toast.error("Some Err");
      } finally {
      }
    };

    return removeFromcartApi();
  };

  const increaseQuantityHandler = (_id) => {
    const incrementQuantityApi = async () => {
      try {
        const response = await fetch(`/api/user/cart/${_id}`, {
          headers: {
            authorization: token,
          },
          method: "POST",
          body: JSON.stringify({ action: { type: "increment" } }),
        });
        const { cart } = await response.json();
        console.log(cart);
        if (response.status === 200) {
          cartDispatch({
            type: "increment",
            payload: cart,
          });
        }
      } catch {}
    };
    return incrementQuantityApi();
  };

  const decreaseQuantityHandler = (_id) => {
    const decrementQuantityApi = async () => {
      try {
        const response = await fetch(`/api/user/cart/${_id}`, {
          headers: {
            authorization: token,
          },
          method: "POST",
          body: JSON.stringify({ action: { type: "decrement" } }),
        });
        const { cart } = await response.json();

        if (response.status === 200) {
          cartDispatch({
            type: "decrement",
            payload: cart,
          });
        }
      } catch {}
    };
    return decrementQuantityApi();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartDispatch,
        removeFromCartHandler,
        increaseQuantityHandler,
        decreaseQuantityHandler,
        addToCartApi,
        loader,
        setLoader,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
