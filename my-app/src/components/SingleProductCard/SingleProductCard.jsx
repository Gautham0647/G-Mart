import StarIcon from "@mui/icons-material/Star";
//import { toast } from "react-toastify";

import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import "./SingleProductCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export function SingleProductCard({ product }) {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { cart, addToCartApi } = useCart();
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

  const addToCartHandler = (product) => {
    // if not logged in navigate to /login
    if (!isAuth) return navigate("/login");
    // location?
    // if /cart --> a
    // a remove from cart
    if (isProductInCart) {
      return navigate("/cart");
    }
    // else b go to cart
    return addToCartApi(product);
  };

  const isProductInCart = cart.find((item) => item._id === product._id);
  const isProductInWishlist = wishlist.find((item) => item._id === product._id);
  return (
    <div className="single_product_wapper">
      <div className="single_item">
        <div className="singlePage_img">
          <img src={productImage} alt={productName} />
        </div>
        <div className="single_item_contain">
          <h3 className="product-details-name">{productName}</h3>
          <h4 className="description">{productDescription}</h4>
          <p className="rating">
            {rating}
            <StarIcon />
          </p>
          <div className="single_price_container">
            <span className="single_new_price">{price}</span>
            <span className="single_discount">{discountPercent}% off</span>
            <span className="single_original_price">{originalPrice}</span>
          </div>

          <div className="singlePage_footer">
            <button
              onClick={() => {
                addToCartHandler(product);
              }}
            >
              {isProductInCart ? "Go to Cart" : "Add to Cart"}
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

//cartDispatch({ type: "ADD-TO-CART", payload: product }

// cartDispatch({
//   type: "REMOVE-FROM-CART",
//   payload: product._id,
// })

// () =>
//                 isProductInCart
//                   ? removeFromCartHandler(product._id)
//                   : addToCartHandler(product)
