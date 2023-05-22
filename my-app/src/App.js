import { Routes, Route } from "react-router-dom";

import "./App.css";
// import logo from "./logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

const categories = [
  {
    id: 2,
    url:"https://picsum.photos/200/300",
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    id:3,
    url:"https://picsum.photos/200/300",
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    id:4 ,
    url:"https://picsum.photos/200/300",
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    id:5 ,
    url:"https://picsum.photos/200/300",
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home categories={categories}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
