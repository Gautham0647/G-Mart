import React from "react";
import { Link } from "react-router-dom";

const isWishlistEmpty = true;

const WishList = () => {
  return isWishlistEmpty ? (
    <div>
      <p>You have no items in your Wishlist.</p>
      <Link to="/">Shop Now</Link>
    </div>
  ) : (
    <div>non empty</div>
  );
};

export default WishList;
