import { LOGO_MAIN } from "../../utils/constants";

const Header = () => {
   return (
      <div className="header">
         <div className="logo">
            <img
               src={LOGO_MAIN}
               alt="Logo"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};

export default Header;