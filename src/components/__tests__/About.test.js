import { screen, render } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

test("About compo is loading correctly", () => {
   render(<About />);

   const heading = screen.getByRole("heading");
   //Assertion
   expect(heading).toBeInTheDocument();
});
