import { useState, useEffect } from "react";
import { RES_MENU_LINK, MENUITEM_IMG_CDN } from "../../utils/constants";

const useResMenu = (resIdFromURL) => {
   const [resMenu, setResMenu] = useState(null);
   useEffect(() => {
      callMenuAPI();
      console.log("USEEFEECT WORKING IN MENUCARD");
   }, []);

   // ! FOR CALLING API WITH THE RestaurantID using useParams HOOK get DynamicURL on
   const callMenuAPI = async () => {
      let response = await fetch(RES_MENU_LINK + resIdFromURL.resId);
      let jsonData = await response.json();
      setResMenu(jsonData?.data);
      // console.log(jsonData?.data?.cards[2]);
   };
   return resMenu;
};

export default useResMenu;
