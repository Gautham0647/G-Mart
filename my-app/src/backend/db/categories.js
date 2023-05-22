import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Contcentrated Perfumes",
    img : "https://in.ajmalperfume.com/cdn/shop/products/Jannatul-Firadus1.png?v=1638013417",
  },
  {
    _id: uuid(),
    categoryName: "Body Mist",
    img : "https://img.fragrancex.com/images/products/parent/medium/777m.webp",
  },
  {
    _id: uuid(),
    categoryName: "Deodorants",
    img : "https://in.ajmalperfume.com/cdn/shop/products/ASCEND_DEODORANT_150ML_1.jpg?v=1668515844",
  },
  {
    _id: uuid(),
    categoryName: "Home Fragrances",
    img : "https://in.ajmalperfume.com/cdn/shop/products/DakhoonAlsafa-2.jpg?v=1637739757",
  },
];
