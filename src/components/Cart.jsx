import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ResItems from "./ResItems";
import { clearCart } from "../../utils/store/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);

   const dispatch = useDispatch();

   const handleClearCart = () => {
      dispatch(clearCart());
   };
   return (
      <div className="subMenuWrapCart">
         {cartItems?.length === 0 && (
            <h3> Cart is empty. Add Items to the cart!</h3>
         )}
         {cartItems.map((item, index) => (
            <CartItems key={index} items={item} />
         ))}
         <div className="tally">
            {cartItems?.length > 0 && (
               <button className="clearBtn " onClick={handleClearCart}>
                  Clear Cart
               </button>
            )}
         </div>
      </div>
   );
};

export default Cart;
