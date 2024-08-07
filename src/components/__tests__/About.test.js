import { screen, render } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

test("Should test About compo is loading correctly", () => {
   render(<About />);
   // query
   const heading = screen.getByRole("heading");
   //Assertion
   expect(heading).toBeInTheDocument();
});

test("Should haveTwoInputs in About compo", () => {
   render(<About />);
   // query
   const inputs = screen.getAllByRole("textbox");
   //Assertion
   expect(inputs.length).toBe(2);
});



