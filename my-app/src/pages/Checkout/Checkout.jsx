import { Link } from "react-router-dom";
import "./Checkout.css";
import { useAddress } from "../../Context/AddressContext";
import { useCart } from "../../Context/CartContext";

export function Checkout() {
  const { cart } = useCart();
  const { addressState, addressDispatch } = useAddress();
  const { addresses, selectedAddress } = addressState;
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
  console.log(addresses);

  return (
    <div className="checkout-page-container">
      <h1 className="checkout_heading">Checkout</h1>
      <div className="checkout_layout">
        <div className="checkout-details-left">
          <div className="address-wrapper">
            {addresses.map((address, index) => {
              const { name, address: areaAddress, phone, pinCode } = address;
              return (
                <label className="address" htmlFor={pinCode}>
                  <h2>{name}</h2>
                  <p>{areaAddress}</p>
                  <p>{pinCode}</p>
                  <p>{phone}</p>
                  <input
                    id={pinCode}
                    type="radio"
                    key={index}
                    name="address"
                    onChange={() =>
                      addressDispatch({
                        type: "SELECT_ADDRESS",
                        payload: address,
                      })
                    }
                  ></input>
                </label>
              );
            })}
          </div>
        </div>
        <div className="checkout-details-right">
          <div>
            <h2 className="checkout-price-heading">Order Details</h2>
            <div className="checkout-details">
              <p>Item</p>
              <p>Quantity</p>
            </div>
            {cart.map(({ productName, count }, index) => {
              return (
                <div className="checkout-details" key={index}>
                  <h3> {productName}</h3>
                  <p> {count}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h2 className="checkout-price-heading">Price Details</h2>
            <div className="checkout-details">
              <p>Price ( {cart.length} )</p>
              <p>INR {totalOriginalPrice}</p>
            </div>
            <div className="checkout-details">
              <p>Discount</p>
              <p>- INR {totalDiscount}</p>
            </div>
            <div className="checkout-details">
              <p>Delivery Charges</p>
              <p>Free</p>
            </div>

            <div className="check_price_total">
              <p>Total Amount</p>
              <p>{totalDiscountedPrice}</p>
            </div>
            <div>
              <p className="checkout-summary-text">
                You will save INR {totalDiscount} on this order
              </p>
            </div>
          </div>
          <div className="selected-address">
            <h2 className="checkout-price-heading">DELIVERY TO</h2>
            <h2>{selectedAddress.name}</h2>
            <p>Address: {selectedAddress.address}</p>
            <p> Pin Code: {selectedAddress.pinCode}</p>
            <p> Phone.No: {selectedAddress.phone}</p>
          </div>
          <div className="order-btn">
            <Link to="/orderSummary" className="place-order-btn">
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
