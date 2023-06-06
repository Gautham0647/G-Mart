import { useAddress } from "../../Context/AddressContext";
import { useCart } from "../../Context/CartContext";

export function Checkout() {
  const { cart } = useCart();
  const {
    addressState: something,
    addressDispatch,
  } = useAddress();
  console.log(something)
  const { addresses, selectedAddress } = something
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
  console.log(addresses)
  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-details-left">
        <div className="address-wrapper">
          {addresses.map((address, index) => {
            const { name, address: areaAddress, phone, pinCode } = address;
            return (
              <label htmlFor={pinCode}>
                <h2>{name}</h2>
                <p>{areaAddress}</p>
                <p>{pinCode}</p>
                <p>{phone}</p>
                <input
                  id={pinCode}
                  type="radio"
                  className="address"
                  key={index}
                  name="address"
                  onChange={() =>
                    addressDispatch({ type: "SELECT_ADDRESS", payload: address })
                  }
                ></input>
              </label>
            );
          })}
        </div>
      </div>
      <div className="checkout-details-right">
        <div>
          <h2 className="price-heading">Order Details</h2>
          {cart.map(({ productName, count }, index) => {
            return (
              <div key={index}>
                <h3>{productName}</h3>
                <p>{count}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h2 className="price-heading">Price Details</h2>
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
        </div>
        <div className="selected-address">
          <h2>{selectedAddress.name}</h2>
          <p>{selectedAddress.address}</p>
          <p>{selectedAddress.pinCode}</p>
          <p>{selectedAddress.phone}</p>
        </div>
      </div>
    </div>
  );
}
