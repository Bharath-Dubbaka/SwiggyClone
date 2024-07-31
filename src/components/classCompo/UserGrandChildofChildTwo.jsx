import React from "react";

class UserGrandChildofChildTwo extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         type: "UserGrandChildofChildTwo",
      };
      // console.log(props);
      console.log("UserGrandChildofChildTwo Constructor");
   }
   componentDidMount() {
      console.log("UserGrandChildofChildTwo componentDidMount");
   }
   render() {
      console.log("UserGrandChildofChildTwo Render");

      return <div>UserGrandChildofChildTwo</div>;
   }
}
export default UserGrandChildofChildTwo;
