import { LOGO_MAIN } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   let [toggleLogin, setToggleLogin] = useState("Login");
   return (
      <div className="header">
         <div className="logo">
            <Link to="/">
               <img src={LOGO_MAIN} id="resImage" alt="Logo" />
            </Link>
         </div>
         <div className="nav-items">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About Us</Link>
               </li>
               <li>
                  <Link to="/contact">Contact Us</Link>
               </li>
               <li>
                  <Link to="/cart">Cart</Link>
               </li>
               <li>
                  <button
                     className="loginLogoutBtn"
                     type="button"
                     onClick={() => {
                        toggleLogin === "Logout"
                           ? setToggleLogin("Login")
                           : setToggleLogin("Logout");
                     }}
                  >
                     {toggleLogin}
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;
