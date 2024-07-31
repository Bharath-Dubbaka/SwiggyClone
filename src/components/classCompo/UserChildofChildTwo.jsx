import React from "react";
import UserGrandChildofChildTwo from "./UserGrandChildofChildTwo";

class UserChildofChildTwo extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         type: "ChildofChildTwo",
      };
      // console.log(props);
      console.log("ChildofChildTwo Constructor");
   }
   componentDidMount() {
      console.log("ChildofChildTwo componentDidMount");
   }
   render() {
      console.log("ChildofChildTwo Render");

      return (
         <div>
            <div>UserChildofChildTwo</div>
            <div>
               <UserGrandChildofChildTwo />
            </div>
         </div>
      );
   }
}
export default UserChildofChildTwo;
