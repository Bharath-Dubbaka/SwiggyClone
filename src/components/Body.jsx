import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmerUI/Shimmer";

const Body = () => {
   //Creating State Variable , Super powerful variables
   let [listOfRes, setListOfRes] = useState([]);
   let [searchedRes, setSearchedRes] = useState([]);
   let [searchText, setSearchText] = useState("");

   // console.log("BODY COMPONENT RENDERED");
   useEffect(() => {
      apiCall();
      console.log("useEffect Inside BODY has been called");
   }, []);

   // ! FOR CALLING API
   let apiCall = async () => {
      let res = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.448489&lng=78.52978&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let jsonData = await res.json();
      setListOfRes(
         jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setSearchedRes(
         jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   };
   // ! FILTER BY RATING
   function topRatedRes(e) {
      // if (e.target.id == "true") {
      //    e.target.id = "false";
      //    apiCall();
      //    e.target.style.backgroundColor = "lightgray";
      //    e.target.style.border = "1px solid grey";
      //    e.target.style.transitionDelay = "300ms";
      // } else {
      e.target.id = "true";
      let arr = searchedRes.filter((res) => res?.info?.avgRating > 4);
      setSearchedRes(arr);
      e.target.style.backgroundColor = "lightgreen";
      e.target.style.border = "2px solid black";
      e.target.style.transitionDelay = "100ms";
      console.log(arr.length);
      // }
   }
   // * SEARCH BTN FN
   let searchBtnFn = () => {
      if (searchText.length > 0) {
         const newRes2 = listOfRes.filter((res) => {
            return res.info.name
               .toLowerCase()
               .includes(searchText.toLowerCase());
         });
         setSearchedRes(newRes2);
      } else {
         apiCall();
      }
   };
   // CONDITIONAL RENDER THE COMPONENT USING TERNARY OPERATOR
   return listOfRes.length == 0 ? (
      <Shimmer />
   ) : (
      <div className="body">
         <div className="searchWrap">
            <input
               type="text"
               value={searchText}
               onChange={(e) => {
                  setSearchText(e.target.value);
               }}
            />
            <button
               type="button"
               onClick={() => {
                  searchBtnFn();
               }}
            >
               Search
            </button>
         </div>
         <div className="filters">
            <button
               type="button"
               id="false"
               onClick={(e) => {
                  topRatedRes(e);
               }}
            >
               4+ stars
            </button>
         </div>
         <div className="restaurantContainer">
            {searchedRes.map((item) => {
               return <RestaurantCard resData={item} key={item?.info?.id} />;
            })}
         </div>
      </div>
   );
};

export default Body;
