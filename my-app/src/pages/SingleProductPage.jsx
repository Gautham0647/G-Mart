
import { useParams } from "react-router";
import { useData } from "../Context/DataContext";
import { useState,useEffect } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";

export function SingleProductPage(){
    const [selectedProduct,setSelectedProduct] = useState({});   
    const { productId } = useParams();
    const {dataState} = useData();
   
    const getProduct=()=>{
        setSelectedProduct(
            dataState.find((product)=>product.id ===Number(productId))
        )
    }
useEffect(()=>{
  getProduct();
},[productId])

return(
    <>
{selectedProduct && <ProductCard product={selectedProduct}/>}

    </>
)
}