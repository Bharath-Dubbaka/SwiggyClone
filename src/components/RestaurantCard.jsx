import { IMG_CDN } from "../../utils/constants";

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
   } = resData?.info;
   return (
      <div className="restaurantCard">
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
         </div>
      </div>
   );
};

export default RestaurantCard;
