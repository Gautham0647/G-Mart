import { Routes, Route } from "react-router-dom";

import "./App.css";
// import logo from "./logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import ProductListing from "./pages/ProductListing/ProductListing";



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
