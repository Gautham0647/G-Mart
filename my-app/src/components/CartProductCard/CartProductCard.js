import { useCart } from "../../Context/CartContext";
import "./CartProductCard.css";

export function CartProductCard({product}){
    const { cart, cartDispatch } = useCart()
    const {
        productName,
        productImage,
        price,
        discountedPrice,
        discountPercent,
    
        rating,
      } = product;
    return (
        <div className ="cart_product_wrapper">
        <div className="cart_item">
        <div className="cart_img">
        <img src={productImage} alt={productName} />
        </div>
        <div className="cart_item_contain">
           <h3>{productName}</h3>
           <div className="card_price">
           <span className="new_price">{price}</span>
           <span>{ discountPercent}% off</span>
           <span>₹{discountedPrice}</span>
           </div>
        </div>
      </div>

        </div>
    )
}


