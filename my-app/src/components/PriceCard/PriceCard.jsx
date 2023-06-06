import {Link} from "react-router-dom"
import "./PriceCard.css";
export function PriceCard({ cart }) {
  // product.count
  // product.originalPrice
  const totalOriginalPrice = cart.reduce(
    (acc, { count, originalPrice }) => acc + originalPrice * count,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, { count, discountPercent, originalPrice }) =>
      acc + (count * originalPrice * discountPercent) / 100,
    0
  );
  const totalDiscountedPrice = totalOriginalPrice - totalDiscount
  return (
    <div className="priceCard-Container">
      <h2 className="price-heading">PRICE DETAILS</h2>
      <div>
        <p>Price ( no. of items )</p>
        <p>INR {totalOriginalPrice}</p>
      </div>
      <div>
        <p>Discount</p>
        <p>- INR {totalDiscount}</p>
      </div>
      <div>
        <p>Delivery Charges</p>
        <p>Free</p>
      </div>
      
      <div>
        <p>Total Amount</p>
        <p>{totalDiscountedPrice}</p>
      </div>
      <div>
      <Link to="/checkout">
      
            Checkout
        </Link>
      </div>

    </div>
  );
}
