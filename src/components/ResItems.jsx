import React from "react";
import { MENUITEM_IMG_CDN, RES_MENU_LINK } from "../../utils/constants";

const ResItems = ({ items }) => {
   return (
      <div className="menuItemsWrap">
         <div className="menuItems" >
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
               <button className="addBtn">Add+</button>
            </div>
         </div>
      </div>
   );
};

export default ResItems;
