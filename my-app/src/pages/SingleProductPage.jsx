import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { SingleProductCard } from "../components/SingleProductCard/SingleProductCard";

export function SingleProductPage() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { productId } = useParams();

  const getProduct = async () => {
    try {
      const productResponse = await fetch(`/api/products/${productId}`);
      const { product } = await productResponse.json();
      if (productResponse.status === 200) {
        setSelectedProduct(product);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <>{selectedProduct && <SingleProductCard product={selectedProduct} />}</>
  );
}
