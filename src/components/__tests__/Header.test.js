import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../utils/store/appStore";
import { Provider } from "react-redux";

test("Should Header compo is loading with LOGIN btn", () => {
   // Render
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );
   // query
   const loginBtn = screen.getByRole("button", { name: "Login" });

   //Assertion
   expect(loginBtn).toBeInTheDocument();
});

test("Should change LOGIN btn to LOGOUT after click in Header compo th ", () => {
   // Render
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );

   const loginBtn = screen.getByRole("button", { name: "Login" });
   fireEvent.click(loginBtn);
   const logoutBtn = screen.getByRole("button", { name: "Logout" });

   expect(logoutBtn).toBeInTheDocument();
});

test("Should Header compo is loading with CART", () => {
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );

   const cart = screen.getByText("Cart");

   expect(cart).toBeInTheDocument();
});

test("If we have OnlineStatus in Header compo", () => {
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );
   // using Regex
   const online = screen.getByText(/Online/);

   expect(online).toBeInTheDocument();
});

test("If we have ABOUT in Header compo", () => {
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );
   // using Regex
   const about = screen.getByText(/About/);

   expect(about).toBeInTheDocument();
});

test("If we have GROCERY in Header compo", () => {
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );
   // using Regex
   const grocery = screen.getByText("Grocery");

   expect(grocery).toBeInTheDocument();
});

test("If we have HOME in Header compo", () => {
   render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>
   );

   const home = screen.getByText("Home");

   expect(home).toBeInTheDocument();
});
