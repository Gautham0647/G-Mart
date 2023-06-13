import { v4 as uuid } from "uuid";
import React from "react";
import "./OrderSummary.css";
import { useCart } from "../../Context/CartContext";
import { useAddress } from "../../Context/AddressContext";

export const OrderSummary = () => {
  const { cart } = useCart();

  const { addressState } = useAddress();
  const { selectedAddress } = addressState;
  const totalOriginalPrice = cart.reduce(
    (acc, { qty, originalPrice }) => acc + originalPrice * qty,
    0
  );
  return (
    <div className="summary-container">
      <h1>Order Summary</h1>
      <div className="summary_layout">
        <div className="order-amount">
          <h2 className="price-heading">Order Placed</h2>
          <div className="details">
            <p>Order ID:</p>
            <p>{`AM${uuid()}`}</p>
          </div>
          <div className="details">
            <p>Total incurred Cost of {cart.length} items</p>
            <p>INR {totalOriginalPrice}</p>
          </div>
        </div>
        <div className="summary_address_wrapper">
          <div className="selected-address">
            <h2 className="checkout-price-heading">Delivery Address</h2>
            <h2>{selectedAddress.name}</h2>
            <div className="details">
              <p>Address: </p>
              <p>{selectedAddress.address}</p>
            </div>
            <div className="details">
              <p>Pin Code: </p>
              <p>{selectedAddress.pinCode}</p>
            </div>
            <div className="details">
              <p>Phone.No: </p>
              <p>{selectedAddress.phone}</p>
            </div>
          </div>
        </div>
        <div className="order-list">
          <h2 className="checkout-price-heading">Ordered Items</h2>
          <div className="ordered-items-wrapper">
            {cart.map(({ productName, productImage, price, count }, index) => {
              return (
                <div className="order-product-card" key={index}>
                  <img src={productImage} alt={productName}></img>
                  <div className="order-product-details">
                    <div className="details">
                      <p>Name: </p>
                      <p>{productName}</p>
                    </div>
                    <div className="details">
                      <p>Quantity: </p>
                      <p>{count} nos</p>
                    </div>
                    <div className="details">
                      <p>Price: </p>
                      <p>₹{price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
