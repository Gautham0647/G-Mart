import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";



const Cart = () => {
  const { cart } = useCart();
  const isCartEmpty = cart.length === 0;
  return isCartEmpty ? (
    <div>
      <p>You have no items in your shopping cart.</p>
      <Link to="/">Shop Now</Link>
    </div>
  ) : (
    <div>
      {cart.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Cart;
