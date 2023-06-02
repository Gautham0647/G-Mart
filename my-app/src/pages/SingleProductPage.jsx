import { useParams } from "react-router";
import { useData } from "../Context/DataContext";
import { useState, useEffect } from "react";
import { SingleProductCard } from "../components/SingleProductCard/SingleProductCard";
//import { ProductCard } from "../components/ProductCard/ProductCard";
//import { CartProductCard } from "../components/CartProductCard/CartProductCard";

export function SingleProductPage() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { productId } = useParams();

  const { products } = useData();

  const getProduct = () => {
    setSelectedProduct(
      products.find((product) => {
        return product.id === productId;
      })
    );
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>{selectedProduct && <SingleProductCard product={selectedProduct} />}</>
  );
}
