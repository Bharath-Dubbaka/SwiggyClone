import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import AboutClass from "./components/classCompo/AboutClass";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/contextData/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import Cart from "./components/Cart";
import Shimmer from "./components/shimmerUI/Shimmer";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => {
   return import("./components/About");
});

const AppLayout = () => {
   // This commented code is to test/emulate the updating the context data
   // const [userName, setUserName] = useState(null); // tying userContext to State variable
   // useEffect(() => {
   //    const someDummyUserName = {
   //       name: "Elon Musk",
   //    };
   //    setUserName(someDummyUserName?.name);
   // }, []);

   // console.log(userName, "userName");
   // return (
   //    // passing setUsername as 2nd value and it can also be used in same way, but to update the value
   //    <UserContext.Provider value={{ loginName: userName, setUserName }}>
   //       <div className="app">
   //          <Header />
   //          {/* <UserContext.Provider value={{ loginName: "John Doe" }}> */}
   //          <Outlet />
   //          {/* </UserContext.Provider> */}
   //       </div>
   //    </UserContext.Provider>
   // )
   //
   return (
      <Provider store={appStore}>
         <div className="app">
            <Header />
            <Outlet />
         </div>
      </Provider>
   );
};

const appRoutes = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: (
               <Suspense fallback={<Shimmer />}>
                  <About />
               </Suspense>
            ),
            // for experiment of class components and remove lazy&suspense
            // element: <AboutClass />,
         },
         {
            path: "/grocery",
            element: (
               <Suspense fallback={<Shimmer />}>
                  <Grocery />
               </Suspense>
            ),
         },
         {
            path: "/cart",
            element: <Cart />,
         },
         // Dynamic Routes
         {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
