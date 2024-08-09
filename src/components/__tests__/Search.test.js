import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import resList from "../../../utils/mockData";
import { jsonData } from "../../../utils/mockData";
import { BrowserRouter } from "react-router-dom";

// Mocking fetch fn with same Behavior
global.fetch = jest.fn(() => {
   return Promise.resolve({
      json: () => {
         return Promise.resolve(jsonData);
      },
   });
});
test("should render my body component with search", async () => {
   await act(async () => {
      render(
         <BrowserRouter>
            <Body />
         </BrowserRouter>
      );
   });
   const searchBtn = screen.getByRole("button", { name: "Search" });
   const inputVal = screen.getByRole("textbox");
   fireEvent.change(inputVal, { target: { value: "pizza" } });
   fireEvent.click(searchBtn);
   //checking dynamic elements by TESTID
   const cards = screen.getAllByTestId("testCards");
   expect(cards.length).toBe(3); // in DummyData we have 3 cards with title of pizza
});
