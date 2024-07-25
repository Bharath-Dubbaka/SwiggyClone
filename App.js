import React from "react";
import ReactDOM from "react-dom/client";
// import * as ReactDOM from "react-dom/client";

const H4fnCompo = () => {
   return <h1 className="compo2">child Compo</h1>;
};
const H3fnCompo = () => {
   return (
      <div>
         {/* //? COMPONENT COMPOSITION General way */}
         <H4fnCompo />
         {/* //? SECOND WAY: We can also write like but not regular convention , but still we can do it and works complety fine, THIS HAS DIFF USES, will get to know in coming episodes */}
         <H4fnCompo></H4fnCompo>
         {/* //? THRID WAY: other way of writing, WHY this works totally fine ? bcz Components are nothing but normal JS functions returning JSX etc, and inside JSX we can run any type of JS by giving {}.. This is NOT regular convention but still we can do it and works complety fine, */}
         {H4fnCompo()}
         <h1 className="compo">Heading from Functional Compo</h1>
      </div>
   );
};

//*  using ReactDOM to get access to DOM , CreateROOT and append it to the root
const root = ReactDOM.createRoot(document.getElementById("root"));

//* syntax for COMPONENT to render()
root.render(<H3fnCompo />);
