import { toast } from "react-toastify";

import { useWishlist } from "../../Context/WishlistContext";
import "./WishlistCard.css";

export function WishlistCard({ product }) {
  const { removeFromWishlisthandler } = useWishlist();
  const {
    productName,
    productImage,
    price,
    originalPrice,
    discountPercent,
    productDescription,
  } = product;
  return (
    <div className="wishlist_product_wrapper">
      <div className="wishlist_item">
        <div className="wishlist_img">
          <img src={productImage} alt={productName} />
        </div>
        <div className="wislist_item_contain">
          <h3>{productName}</h3>
          <h4>{productDescription}</h4>
          <div className="wishlist_price">
            <span className="new_price">{price}</span>
            <span className="discount_percent">{discountPercent}% off</span>
            <span className="orignal_price">₹{originalPrice}</span>
          </div>
          <div className="wishlist_footer">
            <button
              onClick={() => {
                toast.success("Product Removed from Wishlist");
                removeFromWishlisthandler(product._id);
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
