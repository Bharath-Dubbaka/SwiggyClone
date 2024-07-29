import { useEffect, useState } from "react";
import { RES_MENU_LINK, MENUITEM_IMG_CDN } from "../../utils/constants";
import Shimmer from "./shimmerUI/Shimmer";

const RestaurantMenu = ({ resId }) => {
   const [menuData, setMenuData] = useState(null);
   const [menuItems, setMenuItems] = useState(null);

   let priceNumb;
   useEffect(() => {
      callMenuAPI();
      console.log("USEEFEECT WORKING IN MENUCARD");
   }, []);

   const callMenuAPI = async () => {
      let response = await fetch(
         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.448489&lng=78.52978&restaurantId=567784&catalog_qa=undefined&submitAction=ENTER`
      );
      let jsonData = await response.json();
      setMenuData(jsonData?.data);
   };
   console.log("Menu compoennt Re-rendered");
   console.log(menuItems, "menuItems");

   if (menuData == null) return <Shimmer />;
   const {
      avgRating,
      totalRatingsString,
      name,
      sla,
      areaName,
      cuisines,
      costForTwoMessage,
   } = menuData?.cards[2]?.card?.card?.info;
   // const {
   //    avgRating,
   //    totalRatingsString,
   //    name,
   //    sla,
   //    areaName,
   //    cuisines,
   //    costForTwoMessage,
   // } =
   //    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
   //       ?.card?.itemCards[0]?.card?.info?.name;
   console.log(
      menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
         ?.card?.itemCards
   );
   return (
      <div className="menuContainer">
         <div className="resMenuName">{name}</div>
         <div className="subMenuWrap">
            <div className="ratingMenuWrap">
               <div className="rating">
                  {avgRating}, {totalRatingsString}
                  {", "}
               </div>
               <div className="costForTwo">{costForTwoMessage}</div>
            </div>
            <div className="mainGenre">{cuisines.join(", ")}</div>
            <div className="outletLoc">Outlet: {areaName}</div>
            <div className="duration">
               {sla?.slaString}, {sla?.lastMileTravelString}
            </div>
            {/* <div className="moredetails">{menuData?.feeDetails?.message}</div> */}
         </div>
         <div className="subMenuWrap">
            <div className="recommended">
               Recommended: (
               {
                  menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                     ?.cards[2]?.card?.card?.itemCards?.length
               }
               )
            </div>
            <div className="menuItemsWrap">
               {menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                  (menuItem) => {
                     return (
                        <div
                           className="menuItems"
                           key={menuItem?.card?.info?.id}
                        >
                           <div className="menuItemsDetails">
                              <div className="itemName">
                                 {menuItem?.card?.info?.name}
                              </div>
                              <div className="itemPrice">
                                 ₹: {menuItem?.card?.info?.finalPrice / 100}
                              </div>
                              {menuItem?.card?.info?.ratings?.aggregatedRating
                                 ?.rating ? (
                                 <div className="itemRating">
                                    <div className="itemAvgRating">
                                       {
                                          menuItem?.card?.info?.ratings
                                             ?.aggregatedRating?.rating
                                       }
                                    </div>
                                    <div className="itemRatingCount">
                                       {",   "}(
                                       {
                                          menuItem?.card?.info?.ratings
                                             ?.aggregatedRating?.ratingCountV2
                                       }
                                       )
                                    </div>
                                 </div>
                              ) : null}
                              <div className="itemDescription">
                                 {menuItem?.card?.info?.description}
                              </div>
                           </div>
                           <div className="menuItemsImg">
                              <img
                                 src={
                                    MENUITEM_IMG_CDN +
                                    menuItem?.card?.info?.imageId
                                 }
                                 alt=""
                              />
                           </div>
                        </div>
                     );
                  }
               )}
            </div>
         </div>
      </div>
   );
};

export default RestaurantMenu;
