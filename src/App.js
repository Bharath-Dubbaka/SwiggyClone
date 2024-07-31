import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import AboutClass from "./components/classCompo/AboutClass";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/shimmerUI/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => {
   return import("./components/About");
});

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Outlet />
      </div>
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
