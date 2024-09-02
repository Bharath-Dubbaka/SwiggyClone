import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ResItems from "./ResItems";
import { clearCart } from "../../utils/store/cartSlice";

const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);
   console.log("cartItems");

   const dispatch = useDispatch();

   const handleClearCart = () => {
      dispatch(clearCart());
   };
   return (
      <div
         className="subMenuWrap"
         style={{
            margin: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center"
         }}
      >
         <button className="clearBtn" onClick={handleClearCart}>
            Clear Cart
         </button>
         {cartItems?.length === 0 && (
            <h3> Cart is empty. Add Items to the cart!</h3>
         )}
         {cartItems.map((item, index) => (
            <ResItems key={index} items={item} />
         ))}
      </div>
   );
};

export default Cart;
