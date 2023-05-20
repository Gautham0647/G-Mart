import React from 'react'
import { NavLink} from "react-router-dom";


function NavBar() {
   
    
  return (
    
        <div >
         <nav>  
         <NavLink to="/">
            Home
         </NavLink>

         <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
            /> 
          </div>

         <NavLink>
            Cart
         </NavLink>

         <NavLink>Wishlist</NavLink>

         </nav>

         
          
            
          
        </div>
      );



  
}

export default NavBar