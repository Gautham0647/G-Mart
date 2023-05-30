import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../Context/WishlistContext";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";

const WishList = () => {
  const { wishlist } = useWishlist();
  console.log(wishlist);
  //const isWishlistEmpty = wishlist.length === 0;
  const isWishlistEmpty = false;
  return isWishlistEmpty ? (
    <div>
      <p>You have no items in your Wishlist.</p>
      <Link to="/">Shop Now</Link>
    </div>
  ) : (
    <div>
      {wishlist.map((product) => (
        <WishlistCard product={product} />
      ))}
    </div>
  );
};

export default WishList;
