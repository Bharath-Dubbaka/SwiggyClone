import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// for experiment of class components
import AboutClass from "./components/classCompo/AboutClass";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
            element: <About />,
            // for experiment of class components
            // element: <AboutClass />,
         },
         {
            path: "/contact",
            element: <Contact />,
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
