import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
// import logo from "./logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import NavBar from "./components/NavBar";
//import { Footer } from "./components/Footer";
import ProductListing from "./pages/ProductListing/ProductListing";
import { SingleProductPage } from "./pages/SingleProductPage";
import { Login } from "./pages/Login/Login";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { useAuth } from "./Context/AuthContext";
import { Signup } from "./pages/Signup/Signup";
import { Checkout } from "./pages/Checkout/Checkout";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";

function App() {

  const { isAuth } = useAuth();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/" replace /> : <Signup />}
        />
         <Route
          path="/checkout"
          element={ <Checkout/>}
        />
        <Route
          path="/orderSummary"
          element={ <OrderSummary/>}
        />
        
      </Routes>
    </>
  );
}

export default App;
