import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../Context/CartContext";
import { CartProductCard } from "../../components/CartProductCard/CartProductCard";
import "./Cart.css";
import { PriceCard } from "../../components/PriceCard/PriceCard";
import emptycartimg from "../../collections/EmptyCart.png"

const Cart = () => {
  const { cart } = useCart();
  const isCartEmpty = cart.length === 0;
  return (
    <div className="cart-container">
      <h1>
        My Cart
        <span>{cart.length ? `(${cart.length})` : null}</span>
      </h1>
      {isCartEmpty ? (
        <div className="empty-cart">
          <p>You have no items in your shopping cart.</p>
          <div className="emptycartimg">
            <img  className="empty-img" src={emptycartimg} alt="empty cart"/>
          </div>
          <p>
            <Link className="link" to="/">
              Shop Now
            </Link>
          </p>
        </div>
      ) : (
        <>
          <div className="cart_layout">
            <div className="product_cart_wrapper">
              {cart.map((product) => (
                <CartProductCard product={product} />
              ))}
            </div>
            <div className="price_layout">
              {cart.length > 0 && <PriceCard cart={cart} />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
