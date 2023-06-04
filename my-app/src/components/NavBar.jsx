import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

//? icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
//import { useData } from "../Context/DataContext";
import { useFilter } from "../Context/FilterContext";
import { useAuth } from "../Context/AuthContext";

function NavBar() {
  const { isAuth, toggleAuth } = useAuth();
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { filterDispatch } = useFilter();
  const navStyle = ({ isActive }) => ({
    color: isActive ? "yellow" : "#21165e",
    fontWeight: isActive ? "400" : "350",
  });

  const renderAuthButton = isAuth ? (
    <div onClick={() => {
      localStorage.removeItem('storeToken');
      return toggleAuth();
    } }>
      <span className="link-text">Logout</span>
    </div>
  ) : (
    <NavLink to="/login">
      <span className="link-text">Login</span>
    </NavLink>
  );

  const searchHandler = (e) => {
    e.preventDefault();
    if (pathname !== '/products') {
      navigate('/products')
    }
    filterDispatch({ type: "SEARCH-VALUE", payload: e.target.search.value })
  };
  
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          FragrancesX
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item-hoverles">
          <form onSubmit={searchHandler}>
          <input
            onChange={(e) =>
              filterDispatch({ type: "SEARCH-VALUE", payload: e.target.value })
            }
            type="text"
            name="search"
            placeholder="SEARCH"
          />
          </form>
        </li>

        <li className="nav-item">
          <NavLink to="/products" style={navStyle}>
            <ShoppingBagOutlinedIcon />
            <span className="link-text">Products</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/wishlist" style={navStyle}>
            <FavoriteBorderOutlinedIcon />
            <span className="link-text">Wishlist</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" style={navStyle}>
            <ShoppingCartOutlinedIcon />
            <span className="link-text">Cart</span>
          </NavLink>
        </li>
        <li className="">
          {renderAuthButton}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;