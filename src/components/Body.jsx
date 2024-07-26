import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
   //Creating State Variable , Super powerful variables
   let [topRes, setTopRes] = useState(resList);
   function viaVar(e) {
      if (e.target.id == "true") {
         e.target.id = "false";
         e.target.style.backgroundColor = "lightgray";
         setTopRes(resList);
      } else {
         e.target.id = "true";
         e.target.style.backgroundColor = "lightgreen";
         let arr = topRes.filter((res) => res?.info?.avgRating > 4);
         setTopRes(arr);
      }
   }
   return (
      <div className="body">
         <div className="searchWrap">
            <input type="text" />
            <button type="button">Search</button>
         </div>
         <div className="filters">
            <button
               type="button"
               id="false"
               onClick={(e) => {
                  viaVar(e);
               }}
            >
               4+ stars
            </button>
         </div>
         <div className="restaurantContainer">
            {topRes.map((item) => {
               return <RestaurantCard resData={item} key={item?.info?.id} />;
            })}
         </div>
      </div>
   );
};

export default Body;
