import React from "react";
import ReactDOM from "react-dom/client";
// import * as ReactDOM from "react-dom/client";

//* USING JSX, JSX will be transpiled to ReactElement by BABEL
//* which is a JSobject and then sent root.render(elem) and
//* inside root.render() ReactDOM will convert it to htmlElement
const h2JSX = (
   <h2 id="headingTwo" key={"head2"}>
      HeadingTwo
   </h2>
);
// console.log(
//    h2JSX,
//    "same as ReactElem bcz BABEL convert it to ReactElem which is a JSObject "
// );

const H4fnCompo = () => {
   return <h1 className="compo2">child Compo</h1>;
};
const H3fnCompo = () => {
   return (
      <div>
         <H4fnCompo />
         <h1 className="compo">Heading from Functional Compo</h1>
      </div>
   );
};

//*  using ReactDOM to get access to DOM , CreateROOT and append it to the root
const root = ReactDOM.createRoot(document.getElementById("root"));

//? RENDER will take the OBJECT OR COMPONENT
// and convert to(create h1 tag and adding props) HTMLElement that *BROWSER UNDERSTANDS
//* for OBject or ReactElem or JSX
//root.render(pDiv);

//* syntax for COMPONENT to render()
root.render(<H3fnCompo />);
