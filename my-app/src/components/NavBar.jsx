import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

//? icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function NavBar() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? "yellow" : "#21165e",
    fontWeight: isActive ? "400" : "350",
  });

  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          FragrancesX
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item-hoverles">
          <input type="text" placeholder="SEARCH" />
        </li>
        <li className="nav-item">
          <NavLink to="/products" style={navStyle}>
          <ShoppingBagOutlinedIcon/>
            <span className="link-text">Products</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/wishlist" style={navStyle} >
          <FavoriteBorderOutlinedIcon />
            <span className="link-text">Wishlist</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" style={navStyle} >
          <ShoppingCartOutlinedIcon />
            <span className="link-text">Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
