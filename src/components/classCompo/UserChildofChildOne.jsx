import React from "react";

class UserChildofChildOne extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         type: "Counter",
      };
      // console.log(props);
      console.log("ChildofChildOne Constructor");
   }
   componentDidMount() {
      console.log("ChildofChildOne componentDidMount");
   }
   render() {
      console.log("ChildofChildOne Render");
      return <div>UserChildofChildOne</div>;
   }
}
export default UserChildofChildOne;
