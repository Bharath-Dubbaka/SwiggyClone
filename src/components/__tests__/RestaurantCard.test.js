import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import resList from "../../../utils/mockData";
import "@testing-library/jest-dom";

test("Should get data of res into the ResCard compo", () => {
   render(<RestaurantCard resData={resList[0]} />);

   const name = screen.getByText("Vital Bowls - Salads & more");

   expect(name).toBeInTheDocument();
});

test("Should get PromotedResCard compo with promoted label", () => {
   const PromotedResCard = withPromotedLabel(RestaurantCard);

   render(<PromotedResCard resData={resList[0]} />);

   const name = screen.getByText("Vital Bowls - Salads & more");

   expect(name).toBeInTheDocument();
});
