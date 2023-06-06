import StarIcon from "@mui/icons-material/Star";

import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import "./SingleProductCard.css";

export function SingleProductCard({ product }) {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();

  const {
    productName,
    productImage,
    price,
    originalPrice,
    discountPercent,
    productDescription,
    rating,
  } = product;

  const isProductInCart = cart.find((item) => item._id === product._id);
  const isProductInWishlist = wishlist.find((item) => item._id === product._id);
  return (
    <div className="product-detail-card">
      <div className="singlePage_img">
        <img src={productImage} alt={productName} />
      </div>
      <div className="details">
        <h1 className="product-details-name">{productName}</h1>
        <p className="rating">
          {rating}
          <StarIcon />
        </p>
        <p className="description">{productDescription}</p>
        <div className="price-container">
          <p>₹{price}</p>
          <p className="original-price">{originalPrice}</p>
          <p className="discount">{discountPercent}% off</p>
        </div>

        <div className="singlePage_footer">
          <button
            onClick={() =>
              isProductInCart
                ? cartDispatch({
                    type: "REMOVE-FROM-CART",
                    payload: product._id,
                  })
                : cartDispatch({ type: "ADD-TO-CART", payload: product })
            }
          >
            {isProductInCart ? "GO to Cart" : "Add to Cart"}
          </button>
          <button
            onClick={() =>
              isProductInWishlist
                ? wishlistDispatch({
                    type: "REMOVE-FROM-WISHLIST",
                    payload: product._id,
                  })
                : wishlistDispatch({
                    type: "ADD TO WISHLIST",
                    payload: product,
                  })
            }
          >
            {isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

// // <h3></h3>
// <h4></h4>
// <div className="card_price">
//   <span className="new_price"></span>
//   <span className="discount_percent"></span>
//   <span className="orignal_price"></span>
// </div>//
