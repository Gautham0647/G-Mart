import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { FilterProvider } from "./Context/FilterContext";
import { AuthProvider } from "./Context/AuthContext";
import { AddressProvider } from "./Context/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AddressProvider>
          <DataProvider>
            <CartProvider>
              <WishlistProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </WishlistProvider>
            </CartProvider>
          </DataProvider>
        </AddressProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
