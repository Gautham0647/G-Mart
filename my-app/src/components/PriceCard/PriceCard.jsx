import { Link } from "react-router-dom";
import "./PriceCard.css";
export function PriceCard({ cart }) {
  const totalOriginalPrice = cart.reduce(
    (acc, { count, originalPrice }) => acc + originalPrice * count,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, { count, discountPercent, originalPrice }) =>
      acc + (count * originalPrice * discountPercent) / 100,
    0
  );
  const totalDiscountedPrice = totalOriginalPrice - totalDiscount;
  return (
    <div className="priceCard-Container">
      <h2 className="price-heading">PRICE DETAILS</h2>
      <div className="details">
        <p>Price ( {cart.length} )</p>
        <p>INR {totalOriginalPrice}</p>
      </div>
      <div  className="details">
        <p>Discount</p>
        <p>- INR {totalDiscount}</p>
      </div>
      <div className="details">
        <p>Delivery Charges</p>
        <p>Free</p>
      </div>

      <div  className="price_total">
        <p>Total Amount</p>
        <p>INR {totalDiscountedPrice}</p>
      </div>
      <div >
        <p className="summary-text">
          You will save INR {totalDiscount} on this order
        </p>
      </div>
      <div>
        <Link className="checkout_btn" to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}
