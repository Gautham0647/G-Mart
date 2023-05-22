import React from "react";
import { Link } from "react-router-dom";

const isCartEmpty = true;

const Cart = () => {
  return isCartEmpty ? (
    <div>
      <p>You have no items in your shopping cart.</p>
      <Link to="/">Shop Now</Link>
    </div>
  ) : (
    <div>non empty</div>
  );
};

export default Cart;
