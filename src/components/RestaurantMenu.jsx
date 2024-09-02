import Shimmer from "./loadingScreen/Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/cusHooks/useResMenu";
import ResMenuCategories from "./ResMenuCategories";
import { useState } from "react";

const RestaurantMenu = () => {
   const [showIndex, setShowIndex] = useState(0);
   const resIdFromURL = useParams();

   // * USING CUSTOM HOOK TO FETCH DATA AND SEND OVER
   const menuData = useResMenu(resIdFromURL);

   const categoriesCard =
      menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
         (cate) =>
            cate?.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

   const categoriesNestedCard =
      menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
         (cate) =>
            cate?.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );

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

   // console.log(categoriesNestedCard, "OTHER CATE AFTER FILER");
   // console.log(categoriesCard, "ItemCategory  AFTER FILER");
   console.log("Menu component Re-rendered");
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
            <div id="duration" className="rowsAlign">
               {sla?.slaString}, {sla?.lastMileTravelString}
            </div>
            {/* <div className="moredetails">{menuData?.feeDetails?.message}</div> */}
         </div>
         {categoriesCard?.map((category, index) => {
            return (
               <ResMenuCategories
                  menuItems={category}
                  key={index}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => {
                     index == showIndex
                        ? setShowIndex(null)
                        : setShowIndex(index);
                  }}
               />
            );
         })}
      </div>
   );
};

export default RestaurantMenu;
