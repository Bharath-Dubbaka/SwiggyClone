import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmerUI/shimmer"

const Body = () => {
   //Creating State Variable , Super powerful variables
   let [topRes, setTopRes] = useState([]);

   useEffect(() => {
      apiCall();
   }, []);

   let apiCall = async () => {
      let res = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.448489&lng=78.52978&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let jsonData = await res.json();
      setTopRes(
         jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   };

   function changeRes(e) {
      if (e.target.id == "true") {
         e.target.id = "false";
         apiCall();
         e.target.style.backgroundColor = "lightgray";
         e.target.style.border = "1px solid grey";
         e.target.style.transitionDelay = "300ms";
      } else {
         e.target.id = "true";
         let arr = topRes.filter((res) => res?.info?.avgRating > 4);
         setTopRes(arr);
         e.target.style.backgroundColor = "lightgreen";
         e.target.style.border = "2px solid black";
         e.target.style.transitionDelay = "100ms";
         console.log(arr.length);
      }
   }

   // CONDITIONAL RENDER
   if (topRes.length == 0) {
      return <Shimmer />;
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
                  changeRes(e);
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
