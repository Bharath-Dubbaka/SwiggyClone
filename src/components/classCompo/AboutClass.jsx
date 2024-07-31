import UserChildTwo from "./UserChildTwo";
import UserChildOne from "./UserChildOne";
import React from "react";

// LIFECYCLE OF COMPONENT IN REACT
// ----------------------------- Render Phase of Component LifeCycle inSequence
// ParentCons
// Parentren
//    C1Cons
//    C1Ren
//       CoC1Cons
//       CoC1Ren
//    C2Cons
//    C2Ren
//       CoC2Cons
//       CoC2Ren
//          GrandCoC2Cons
//          GrandCoC2Ren
// ----------------------------- Commit Phase of Component LifeCycle inSequence -- this cycle starsts when react completes the all then Constructors and Renders and done.. THIS(Commit phase/DOM changes) STARTS from the FIRST component IT HAS ENCOUNTERES  inside nest which has NO CHILDS INSIDE IT &&& previously had completed the first phase of Rendering ITS CONSTRUCTORFN AND RENDERMETHOD
//       CoC1CompDidMount - "First comp , as explained above this is the first compo which has completed its phase1 of rendering its constructorFn and renderMethod and had NO children inside
//    C1CompDidMount
//          GrandCoC2CompDidMount
//       CoC2CompDidMount
//    C2CompDidMount
// ParentCompDidMount

class AboutClass extends React.Component {
   constructor(props) {
      super(props);
      console.log("ParentAbout Constructor");
   }
   componentDidMount() {
      console.log("ParentAbout componentDidMount");
   }
   render() {
      console.log("ParentAbout render");
      return (
         <div className="aboutPage">
            <UserChildOne />
            <UserChildTwo />
            <h1>About Us:</h1>
            <h3>Mission</h3>
            <p>
               Our mission is to elevate the quality of life of the urban
               consumer by offering unparalleled convenience. Convenience is
               what makes us tick. It’s what makes us get out of bed and say,
               “Let’s do this.”{" "}
            </p>
            <h3>Industry pioneer </h3>
            <p>
               Being among the first few entrants, Swiggy has successfully
               pioneered the hyperlocal commerce industry in India, launching
               Food Delivery in 2014 and Quick Commerce in 2020. Due to the
               pioneering status of Swiggy, it is well-recognised as a leader in
               innovation in hyperlocal commerce and as a brand synonymous with
               the categories it is present in.
            </p>
         </div>
      );
   }
}

export default AboutClass;
