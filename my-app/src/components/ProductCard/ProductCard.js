import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
//import{Link} from "react-router-dom"
import "./ProductCard.css";

export function ProductCard({ product }) {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();

  const {
    productName,
    productImage,
    orignalPrice,
    discountPercent,

    rating,
  } = product;

  const isProductInCart = cart.find((item) => item.id === product.id);
  const isProductInWishlist = wishlist.find((item) => item.id === product.id);
  return (
    <div className="product-wrapper">
      <div className="product-header">
        <img src={productImage} alt={productName} />
      </div>
      <div className="product-body">
        <p className="product-name">{productName}</p>
        <div className="product-price-wrapper">
          <h3 className="product-discounted-price">₹{orignalPrice}/-</h3>
          <div className="product-discount">{discountPercent}% Off</div>
        </div>
      </div>
      <p className="product-rating">{rating}</p>
      <div className="product-footer">
        <button
          className="product-add-to-cart"
          onClick={() =>
            isProductInCart
              ? cartDispatch({ type: "REMOVE-FROM-CART", payload: product.id })
              : cartDispatch({ type: "ADD-TO-CART", payload: product })
          }
        >
          {isProductInCart ? "GO-to Cart" : "Add to Cart"}
        </button>
        <button 
        onClick=
          {() =>
            isProductInWishlist
              ? wishlistDispatch({
                  type: "REMOVE-FROM-WISHLIST",
                  payload: product.id,
                })
              : wishlistDispatch({ type: "ADD TO WISHLIST", payload: product })
          }

         className="product-wishlist">
          
          {isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        </button>
        {/* <h1>{product.count}</h1> */}
      </div>
    </div>
  );
}
