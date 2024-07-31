const useResCards = () => {
   let [listOfRes, setListOfRes] = useState([]);
   let [searchedRes, setSearchedRes] = useState([]);
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
   return listOfRes;
};

export default useResCards;
