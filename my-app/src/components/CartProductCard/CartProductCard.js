import { useCart } from "../../Context/CartContext";
//import { PriceCard } from "../PriceCard/PriceCard";
import "./CartProductCard.css";

export function CartProductCard({ product }) {
  const { cartDispatch } = useCart();
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
            <span className="orignal_price">₹{originalPrice}</span>
          </div>
          <div>
            <button
              onClick={() =>
                cartDispatch({ type: "DECREASE-FROM-CART", payload: product })
              }
              disabled={product.count <= 1}
            >
              -
            </button>
            {product.count}
            <button
              onClick={() =>
                cartDispatch({ type: "ADD-TO-CART", payload: product })
              }
            >
              +
            </button>
          </div>
          <div className="cart_footer">
            <button
              onClick={() =>
                cartDispatch({ type: "REMOVE-FROM-CART", payload: product._id })
              }
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
