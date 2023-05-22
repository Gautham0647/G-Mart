import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

//? icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function NavBar() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? "yellow" : "#21165e",
    fontWeight: isActive ? "400" : "350",
  });

  return (
    <div className="navbar">
      <div>
        {/* logo */}
        <img
          className="logo-img"
          src="https://picsum.photos/200/300"
          alt="random logo"
        />
        <p className="logo-name">FragranceX</p>
      </div>

      <div className="search-bar">
        <input className="input" type="text" placeholder="Search" />
      </div>

      <div>
        <nav className="nav-list">
          <ul>
            <li>
              <NavLink to="/" style={navStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" style={navStyle}>
                <ShoppingCartOutlinedIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" style={navStyle}>
                <FavoriteBorderOutlinedIcon />{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
