import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { CartProductCard } from "../../components/CartProductCard/CartProductCard";

const Cart = () => {
  const { cart } = useCart();
  const isCartEmpty = cart.length === 0;
  return isCartEmpty ? (
    <div>
      <h2>The Cart</h2>
      <p>You have no items in your shopping cart.</p>
      <Link to="/">Shop Now</Link>
    </div>
  ) : (
    <div>
      {cart.map((product) => (
        <CartProductCard product={product} />
      ))}
    </div>
  );
};

export default Cart;


