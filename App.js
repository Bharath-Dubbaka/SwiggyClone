// using React/Cdn to create Element
const h1 = React.createElement(
   // Obj type
   "h1",
   // Obj props
   { id: "heading", key: "head1" },
   // Obj children inside props
   "Namastey from React"
);
const h2 = React.createElement(
   "h2",
   { id: "headingTwo", key: "head2" },
   "I am Heading 2"
);
const cDiv = React.createElement("div", { id: "child" }, [h1, h2]);
const pDiv = React.createElement("div", { id: "parent" }, cDiv);
//  const div = React.createElement("div", {}, "");
//  div.className = "root";

console.log(h1); //will return an Obj, later will be convert to element
console.log(pDiv);

//  using ReactDOM/Cdn to get access to DOM , CreateROOT and append it to the root
const root = ReactDOM.createRoot(document.getElementById("root"));
//  const root = ReactDOM.createRoot(div)

// RENDER will take the obj
// and convert to(create h1 tag and adding props) HTMLtag that *BROWSER UNDERSTANDS
root.render(pDiv);
