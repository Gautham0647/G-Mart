import "./ProductCard.css";

export function ProductCard({ product, add, move }) {
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
        <button className="product-add-to-cart">Add to Cart </button>
        <button className="product-wishlist">WishList </button>
      </div>
    </div>
  );
}
