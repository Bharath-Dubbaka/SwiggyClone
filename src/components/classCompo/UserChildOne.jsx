import { useState } from "react";
import React, { Component } from "react";
import UserChildofChildOne from "./UserChildofChildOne";

export class UserChildOne extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         type: "Counter",
      };
      // console.log(props);
      console.log("UserChildOne Constructor");
   }
   componentDidMount() {
      console.log("UserChildOne componentDidMount");
   }
   render() {
      console.log("UserChildOne Render");

      return (
         <div>
            <div>{this.state.count}</div>
            <button
               type="button"
               onClick={() => {
                  this.setState({ count: this.state.count + 1 });
               }}
            >
               Counter
            </button>
            <UserChildofChildOne />
         </div>
      );
   }
}

export default UserChildOne;
