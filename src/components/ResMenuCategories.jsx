import React, { useState } from "react";
import ResItems from "./ResItems";

const ResMenuCategories = ({
   menuItems,
   showItems,
   setShowIndex,
}) => {
   // const [viewItems, setViewItems] = useState(false);
   // console.log(menuItems?.card?.card, "menuItems");
   return (
      <div className="subMenuWrap">
         <div
            className="subHeading"
            onClick={() => {
               // console.log(viewItems, "viewItems");
               setShowIndex();
            }}
         >
            <div className="detailsSubHeading">
               {menuItems?.card?.card?.title}: (
               {menuItems?.card?.card?.itemCards?.length})
            </div>
            <div className="downArrow">🔻</div>
         </div>
         {showItems
            ? menuItems?.card?.card?.itemCards?.map((items, index) => {
                 return <ResItems items={items} key={index} />;
              })
            : null}
      </div>
   );
};

export default ResMenuCategories;
