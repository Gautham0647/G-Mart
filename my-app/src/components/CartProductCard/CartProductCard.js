import { useCart } from "../../Context/CartContext";
import "./CartProductCard.css";

export function CartProductCard({ product }) {
  const { cartDispatch } = useCart();
  const {
    productName,
    productImage,
    price,
    orignalPrice,
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
            <span className="orignal_price">₹{orignalPrice}</span>
          </div>
          <div className="cart_footer">
            <button
              onClick={() =>
                cartDispatch({ type: "REMOVE-FROM-CART", payload: product.id })
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
