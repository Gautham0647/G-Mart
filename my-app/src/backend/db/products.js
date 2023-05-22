import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Jannatul Firdaus ",
    productDescription: "Jannatul Firdaus Concentrated Perfume Free From Alcohol 10ml For Unisex",
    productImage:
      "https://in.ajmalperfume.com/cdn/shop/products/Jannatul-Firadus1.png?v=1638013417",
    categoryName: "Contcentrated Perfumes",
    price: 500 ,
    discountPercent: 10,
    discountedPrice: 110,
    onSale: true,
    outOfStock: false,
    rating: 4.5,
    trending: true,
  },
  
];
