import React from "react";
import { MENUITEM_IMG_CDN, RES_MENU_LINK } from "../../utils/constants";
import { addItem } from "../../utils/store/cartSlice";
import { useDispatch, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ResItems = ({ items }) => {
   //UPDATING THE STORE USING DISPATCH HOOK FOR ACTIONS

   const dispatch = useDispatch();
   const handleAddItem = (item) => {
      dispatch(addItem(item));
   };
   return (
      <div className="menuItemsWrap">
         <div className="menuItems">
            <div className="menuItemsDetails">
               <div className="itemName">{items?.card?.info?.name}</div>
               <div className="itemPrice">
                  ₹:{" "}
                  {items?.card?.info?.price / 100 ||
                     items?.card?.info?.defaultPrice / 100}
               </div>
               {items?.card?.info?.ratings?.aggregatedRating?.rating ? (
                  <div className="itemRating">
                     <div className="itemAvgRating">
                        {items?.card?.info?.ratings?.aggregatedRating?.rating}
                     </div>
                     <div className="itemRatingCount">
                        {",   "}(
                        {
                           items?.card?.info?.ratings?.aggregatedRating
                              ?.ratingCountV2
                        }
                        )
                     </div>
                  </div>
               ) : null}
               <div className="itemDescription">
                  {items?.card?.info?.description}
               </div>
            </div>
            <div className="menuItemsImg">
               <img
                  src={MENUITEM_IMG_CDN + items?.card?.info?.imageId}
                  alt=""
               />
               <button className="addBtn" onClick={() => handleAddItem(items)}>
                  Add+
               </button>
            </div>
         </div>
      </div>
   );
};

export default ResItems;
