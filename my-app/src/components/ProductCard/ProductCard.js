import { useCart } from "../../Context/CartContext";
import "./ProductCard.css";

export function ProductCard({ product, add, move }) {
  const { cart, cartDispatch } = useCart();

  const {
    _id,
    productName,
    productImage,
    price,
    discountedPrice,
    discountPercent,
    onSale,
    rating,
  } = product;

  const isProductInCart = cart.find((item) => item.id === product.id);
  return (
    <div className="product-wrapper">
      <div className="product-header">
        <img src={productImage} alt={productName} />
      </div>
      <div className="product-body">
        <p className="product-name">{productName}</p>
        <div className="product-price-wrapper">
          <h3 className="product-discounted-price">${discountedPrice}/-</h3>
          <div className="product-discount">{discountPercent}% Off</div>
        </div>
      </div>
      <p className="product-rating">{rating}</p>
      <div className="product-footer">
        <button
          className="product-add-to-cart"
          onClick={() =>
            isProductInCart
              ? cartDispatch({ type: "REMOVE-FROM-CART", payload: product.id })
              : cartDispatch({ type: "ADD-TO-CART", payload: product })
          }
        >
          {isProductInCart ? "Go to Card" : "Add to Cart"}
        </button>
        <button className="product-wishlist">Wishlist </button>
        {/* <h1>{product.count}</h1> */}
      </div>
    </div>
  );
}
