import { v4 as uuid } from "uuid";
import React from "react";
import "./OrderSummary.css";
import { useCart } from "../../Context/CartContext";
import { useAddress } from "../../Context/AddressContext";

export const OrderSummary = () => {
  // const { cart } = useCart();
  const cart = [
    {
      _id: '9a857317-517d-48fb-92b4-62a034ca91e8',
      productName: 'Jannatul Firdaus ',
      productDescription: 'Jannatul Firdaus Concentrated Perfume Free From Alcohol 10ml For Unisex',
      productImage: 'https://in.ajmalperfume.com/cdn/shop/products/Jannatul-Firadus1.png?v=1638013417',
      categoryName: 'Contcentrated Perfumes',
      price: 400,
      discountPercent: 50,
      originalPrice: 800,
      onSale: true,
      outOfStock: false,
      rating: 4,
      trending: true,
      id: '1',
      count: 1
    }, {
      _id: '276c6df5-1b0e-4a38-b3e0-8a26a42f44ba',
      productName: 'Jimmy Choo Man',
      productDescription: 'Jimmy Choo Man Blue Cologne 100 ml Eau De Toilette Spray',
      productImage: 'https://img.fragrancex.com/images/products/parent/medium/76480m.webp',
      categoryName: 'Contcentrated Perfumes',
      price: 810,
      discountPercent: 10,
      originalPrice: 900,
      onSale: true,
      outOfStock: false,
      rating: 1,
      trending: true,
      id: '6',
      count: 1
    },
    {
      _id: '02cbfc3b-99b4-4c9f-9440-0f7f0a0768af',
      productName: 'Crystal Noir Perfume',
      productDescription: '90 ml Eau De Parfum Spray',
      productImage: 'https://img.fragrancex.com/images/products/parent/medium/60546w.webp',
      categoryName: 'Contcentrated Perfumes',
      price: 1188,
      discountPercent: 5,
      originalPrice: 1250,
      onSale: true,
      outOfStock: false,
      rating: 3,
      trending: true,
      id: '7',
      count: 1
    },
    
  ]

  console.log(cart)
  const { addressState } = useAddress();
  const { selectedAddress } = addressState;
  const totalOriginalPrice = cart.reduce(
    (acc, { count, originalPrice }) => acc + originalPrice * count,
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
                      <p>{count}</p>
                    </div>
                    <div className="details">
                      <p>Price: </p>
                      <p>{price}</p>
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
