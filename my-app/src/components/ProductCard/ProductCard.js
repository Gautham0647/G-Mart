import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import StarIcon from '@mui/icons-material/Star';

import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
//import{Link} from "react-router-dom"
import "./ProductCard.css";
import { useAuth } from "../../Context/AuthContext";

export function ProductCard({ product }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();

  const {
    _id,
    productName,
    productImage,
    orignalPrice,
    price,
    discountPercent,
    rating,
  } = product;

  const isProductInCart = cart.find((item) => item._id === product._id);
  const isProductInWishlist = wishlist.find((item) => item._id === product._id);

  const addToCartHandler = () => {
    // if not logged in navigate to /login
    if (!isAuth) return navigate("/login");

    // location?
    // if /cart --> a
    // a remove from cart
    if (pathname !== "/cart" && isProductInCart) return navigate("/cart");

    // else b go to cart
    return isProductInCart
      ? cartDispatch({ type: "REMOVE-FROM-CART", payload: product._id })
      : cartDispatch({ type: "ADD-TO-CART", payload: product });
  };

  const addToCartButtonText = () => {
    if (pathname !== "/cart" && isProductInCart) return "Go to Cart";
    return isProductInCart ? "Remove from Cart" : "Add from Cart";
  };

  return (
    <div className="product-wrapper">
      <div className="product-header">
        <NavLink to={`/products/${_id}`}>
          <img src={productImage} alt={productName} />
        </NavLink>
      </div>
      <div className="product-body">
        <p className="product-name">
          <NavLink to={`/products/${_id}`}>{productName}</NavLink>
        </p>
        <div className="product-price-wrapper">
          <h3 className="product-discounted-price">₹{price}/-</h3>
          <h4 className="product-orignal-price">₹{orignalPrice}</h4>
          <div className="product-discount">{discountPercent}% Off</div>
        </div>
      </div>
      <p className="product-rating">{rating}
      <StarIcon/>
      </p>
      <div className="product-footer">
        <button className="product-add-to-cart" onClick={addToCartHandler}>
          {addToCartButtonText()}
        </button>
        <FavoriteBorderRoundedIcon
          onClick={() =>
            isProductInWishlist
              ? wishlistDispatch({
                  type: "REMOVE-FROM-WISHLIST",
                  payload: product._id,
                })
              : wishlistDispatch({ type: "ADD TO WISHLIST", payload: product })
          }
          className="heart-icon"
        />
        
        {/* <FavoriteBorderRoundedIcon>
          {isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        </FavoriteBorderRoundedIcon> */}
        {/* <h1>{product.count}</h1> */}
      </div>
    </div>
  );
}
