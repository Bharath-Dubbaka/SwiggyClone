import React from "react";
// import UserContext from "../../utils/contextData/UserContext";
// import { useContext } from "react";

const About = () => {
   let userLoginData; //= useContext(UserContext);
   return (
      <div className="aboutPage">
         <h1>About Us:</h1>
         <p>Mission</p>
         <p>
            Hey:
            {/* {userLoginData ? userLoginData?.loginName : null},  */}
            Our mission is to elevate the quality of life of the urban consumer
            by offering unparalleled convenience. Convenience is what makes us
            tick. It’s what makes us get out of bed and say, “Let’s do this.”{" "}
         </p>
         <p>Industry pioneer </p>
         <p>
            Being among the first few entrants, Swiggy has successfully
            pioneered the hyperlocal commerce industry in India, launching Food
            Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering
            status of Swiggy, it is well-recognised as a leader in innovation in
            hyperlocal commerce and as a brand synonymous with the categories it
            is present in.
         </p>
         <p>Contact Us for more</p>
         <input type="text" />
         <input type="text" />
      </div>
   );
};

export default About;
