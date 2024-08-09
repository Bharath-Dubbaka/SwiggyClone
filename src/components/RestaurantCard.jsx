import { IMG_CDN } from "../../utils/constants";
import UserContext from "../../utils/contextData/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ resData }) => {
   const {
      name,
      cloudinaryImageId,
      avgRating,
      costForTwo,
      deliveryTime,
      lastMileTravelString,
      cuisines,
      sla,
      id,
      // id,
   } = resData?.info;
   // const userLoginData = useContext(UserContext);

   // console.log(resData?.info?.id, "resId");
   return (
      <div data-testid="testCards" className="restaurantCard">
         <div className="image">
            <img src={IMG_CDN + cloudinaryImageId} alt="Res Image" />
         </div>
         <div className="details">
            <h3 className="resTitle">{name}</h3>
            <div>{avgRating} Stars</div>
            <div>{costForTwo}</div>
            <div>
               {sla.deliveryTime} Mins, {sla.lastMileTravelString} Away
            </div>
            <div className="cuisineList">{cuisines.join(", ")}</div>
            {/* <div>{userLoginData?.loginName}</div> */}
         </div>
      </div>
   );
};

// HOC to wrap promoted label on resItems
export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
      return (
         <div className="promotedWrap">
            <div className="promotedLabel">🔥</div>
            <RestaurantCard {...props} />
         </div>
      );
   };
};

export default RestaurantCard;
