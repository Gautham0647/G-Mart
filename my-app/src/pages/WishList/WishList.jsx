import React from "react";
import { Link } from "react-router-dom";

import "./Wishlist.css";
import { useWishlist } from "../../Context/WishlistContext";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";

const WishList = () => {
  const { wishlist } = useWishlist();
  const isWishlistEmpty = wishlist.length === 0;
  console.log(wishlist)
  return (
    <div className="wishlist-container">
      <h1>
        My Wishlist
        <span>{wishlist.length ? `(${wishlist.length})` : null}</span>
      </h1>

      {isWishlistEmpty ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty!.</p>
          <p>
            <Link className="link" to="/">
              Shop Now
            </Link>
          </p>
        </div>
      ) : (
        <div>
          {wishlist.map((product) => (
            <WishlistCard product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
