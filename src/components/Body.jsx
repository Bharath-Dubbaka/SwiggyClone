import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./loadingScreen/Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../../utils/cusHooks/useStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../../utils/contextData/UserContext";

const Body = () => {
   //Creating State Variable , Super powerful variables
   let [listOfRes, setListOfRes] = useState([]);
   let [searchedRes, setSearchedRes] = useState([]);
   let [searchText, setSearchText] = useState("");
   // let [inputUserName, setInputUserName] = useState("");
   const onlineStatus = useStatus();

   const { setUserName, userName } = useContext(UserContext);

   const PromotedResCard = withPromotedLabel(RestaurantCard);

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
      // console.log("listOfRes of sertted", listOfRes);
      setSearchedRes(
         jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   };
   // ! FILTER BY RATING
   function topRatedRes(e) {
      if (e.target.id == "true") {
         e.target.id = "false";
         apiCall();
         e.target.style.backgroundColor = "lightgray";
         e.target.style.border = "1px solid grey";
         e.target.style.transitionDelay = "300ms";
      } else {
         e.target.id = "true";
         let arr = searchedRes.filter((res) => res?.info?.avgRating > 4.5);
         setSearchedRes(arr);
         e.target.style.backgroundColor = "ghostwhite";
         e.target.style.color = "#F3640B";
         e.target.style.border = "2px solid #F3640B";
         e.target.style.transitionDelay = "100ms";
         console.log(arr.length);
      }
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

   if (!onlineStatus) return <h1>NO INTERNET</h1>;

   // ? USING SHIMMER UN TILL DATA AND SET IN USE STATE
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
            <button
               type="button"
               id="false"
               onClick={(e) => {
                  topRatedRes(e);
               }}
               style={{ marginLeft: "1rem" }}
            >
               4+ stars
            </button>
         </div>

         {/* contextExperiment */}
         {/* <div className="contextExperiment">
            <input
               type="text"
               // value={inputUserName}
               value={userName}
               onChange={(e) => {
                  // setInputUserName(e.target.value);
                  setUserName(e.target.value);
               }}
            />
         </div> */}
         <div className="restaurantContainer">
            {searchedRes.map((item) => {
               return (
                  <Link
                     to={"/restaurant/" + item?.info?.id}
                     key={item?.info?.id}
                  >
                     {/* keys should be given to the top most elem in mapping, as Link is top parent, 
                     if we give key tp ResCard and delete it .. 
                     it may result into delete ResCard compo but not the Link which is wrapped around */}

                     {item?.info?.avgRating >= 4.5 ? (
                        <PromotedResCard resData={item} />
                     ) : (
                        <RestaurantCard resData={item} />
                     )}
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Body;
