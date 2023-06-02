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
    orignalPrice,
    discountPercent,
    productDescription,
  } = product;

  const isProductInCart = cart.find((item) => item.id === product.id);
  const isProductInWishlist = wishlist.find((item) => item.id === product.id);
  return (
    <div className="singlePage_product_wrapper">
      <div className="singlePage_item">
        <div className="singlePage_img">
          <img src={productImage} alt={productName} />
        </div>
        <div className="singlePage_item_contain">
          <h3>{productName}</h3>
          <h4>{productDescription}</h4>
          <div className="card_price">
            <span className="new_price">{price}</span>
            <span className="discount_percent">{discountPercent}% off</span>
            <span className="orignal_price">₹{orignalPrice}</span>
          </div>
          <div className="singlePage_footer">
            <button
              onClick={() =>
                isProductInCart
                  ? cartDispatch({
                      type: "REMOVE-FROM-CART",
                      payload: product.id,
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
                      payload: product.id,
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


