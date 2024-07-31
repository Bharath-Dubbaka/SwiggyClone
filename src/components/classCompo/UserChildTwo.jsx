// import PropTypes from "prop-types";
import React, { Component } from "react";
import UserChildofChildTwo from "./UserChildofChildTwo";

export class UserClass extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         type: "Counter",
      };
      //   console.log(props);
      console.log("ChildTwo Constructor");
   }
   componentDidMount() {
      console.log("ChildTwo componentDidMount");
   }
   render() {
      console.log("ChildTwo Render");

      let { name, welcome } = this.props;
      let { type, count } = this.state;
      return (
         <div>
            {/* <div>{name}</div>
            <div>{welcome}</div> */}
            <div>{type}</div>
            <div>{count}</div>
            <button
               type="button"
               onClick={() => {
                  this.setState({ count: count + 1 });
               }}
            >
               ClassCounter
            </button>
            <UserChildofChildTwo />
         </div>
      );
   }
}

export default UserClass;
