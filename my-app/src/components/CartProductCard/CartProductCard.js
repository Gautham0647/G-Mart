//import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import "./CartProductCard.css";
//import { toast } from "react-toastify";
//import { useAuth } from "../../Context/AuthContext";

export function CartProductCard({ product }) {
  //const [loader, setLoader] = useState();
  //const { isAuth, token } = useAuth();
  const {
    removeFromCartHandler,
    increaseQuantityHandler,
    decreaseQuantityHandler,
  } = useCart();
  const {
    productName,
    productImage,
    price,
    originalPrice,
    discountPercent,
    productDescription,
  } = product;

  return (
    <div className="cart_product_wrapper">
      <div className="cart_item">
        <div className="cart_img">
          <img src={productImage} alt={productName} />
        </div>
        <div className="cart_item_contain">
          <h3>{productName}</h3>
          <h4>{productDescription}</h4>
          <div className="card_price">
            <span className="new_price">{price}</span>
            <span className="discount_percent">{discountPercent}% off</span>
            <span className="original_price">₹{originalPrice}</span>
          </div>
          <div className="quantity-actions">
            <button
              onClick={() => decreaseQuantityHandler(product._id)}
              disabled={product.qty <= 1}
            >
              -
            </button>
            {product.qty}
            <button onClick={() => increaseQuantityHandler(product._id)}>
              +
            </button>
          </div>

          <div className="cart_footer">
            <button onClick={() => removeFromCartHandler(product._id)}>
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
