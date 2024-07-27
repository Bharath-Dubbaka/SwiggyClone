import { LOGO_MAIN } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
   let [toggleLogin, setToggleLogin] = useState("Login");
   return (
      <div className="header">
         <div className="logo">
            <img src={LOGO_MAIN} alt="Logo" />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
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
