import React from "react";
import ReactDOM from "react-dom/client";
// import * as ReactDOM from "react-dom/client";

// using React to create Element
const h1 = React.createElement(
   // Obj type OR Name
   "h1",
   // Obj props OR Attributes
   { id: "heading", key: "head1" },
   // Obj children inside props
   "Namastey from React"
);

//* USING JSX, JSX will be transpiled to ReactElement by BABEL
//* which is a JSobject and then sent root.render(elem) and
//* inside root.render() ReactDOM will convert it to htmlElement
const h2 = (
   <h2 id="headingTwo" key={"head2"}>
      HeadingTwo
   </h2>
);
// console.log(
//    h2,
//?    "if we log the JSX it will same as ReactElem bcz, BABEL converted it to ReactElement which is a JSObject "
// );
const cDiv = React.createElement("div", { id: "child" }, [h1, h2]);
const pDiv = React.createElement("div", { id: "parent" }, cDiv);

console.log(h1); //? ReactElem will return an Obj, later will be convert to element
console.log(pDiv);

//  using ReactDOM to get access to DOM , CreateROOT and append it to the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// RENDER will take the obj
// and convert to(create h1 tag and adding props) HTMLElement that *BROWSER UNDERSTANDS
root.render(pDiv);
