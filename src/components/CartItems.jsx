import React from "react";
import { MENUITEM_IMG_CDN, RES_MENU_LINK } from "../../utils/constants";
import { addItem } from "../../utils/store/cartSlice";
import { useDispatch, useDispatch } from "react-redux";

const CartItems = ({ items }) => {
   const dispatch = useDispatch();
   const handleAddItem = (item) => {
      dispatch(addItem(item));
   };
   return (
      <div className="menuItemsWrap">
         <div className="menuItemsCart">
            <div className="menuItemsDetails">
               <div className="itemName">{items?.card?.info?.name}</div>
               <div className="itemPrice">
                  ₹:{" "}
                  {items?.card?.info?.price / 100 ||
                     items?.card?.info?.defaultPrice / 100}
               </div>
            </div>
            <button
               className="addBtnInCart"
               onClick={() => handleAddItem(items)}
            >
               Add+
            </button>
         </div>
      </div>
   );
};

export default CartItems;
