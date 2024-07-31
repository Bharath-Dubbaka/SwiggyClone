import { RES_MENU_LINK, MENUITEM_IMG_CDN } from "../../utils/constants";
import Shimmer from "./shimmerUI/Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/cusHooks/useResMenu";

const RestaurantMenu = () => {
   // const [menuData, setMenuData] = useState(null);
   const resIdFromURL = useParams();
   //// console.log(resIdFromURL);

   // * USING CUSTOM HOOK TO FETCH DATA AND SEND OVER
   const menuData = useResMenu(resIdFromURL)

   console.log("Menu component Re-rendered");

   // ? USING SHIMMER UN TILL DATA AND SET IN USE STATE
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
   const { itemCards } =
      menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
         ?.card;
   //// console.log("AFTER SHIMMER itemCards", itemCards);

   return (
      <div className="menuContainer">
         <div className="resMenuName">{name}</div>
         <div className="subMenuWrap">
            <div className="ratingMenuWrap rowsAlign">
               <div className="rating">
                  {avgRating}, {totalRatingsString}
                  {", "}
               </div>
               <div className="costForTwo">{costForTwoMessage}</div>
            </div>
            <div className="mainGenre rowsAlign">{cuisines.join(", ")}</div>
            <div className="outletLoc rowsAlign">Outlet: {areaName}</div>
            <div className="duration rowsAlign">
               {sla?.slaString}, {sla?.lastMileTravelString}
            </div>
            {/* <div className="moredetails">{menuData?.feeDetails?.message}</div> */}
         </div>
         <div className="subMenuWrap">
            <div className="recommended">
               Recommended: ({itemCards?.length})
            </div>
            <div className="menuItemsWrap">
               {itemCards?.map((menuItem) => {
                  return (
                     <div className="menuItems" key={menuItem?.card?.info?.id}>
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
               })}
            </div>
         </div>
      </div>
   );
};

export default RestaurantMenu;
