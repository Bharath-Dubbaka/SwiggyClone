import { sum } from "../sum";

test("testing sum of 2 params", () => {
   const res = sum(3, 6);

   //Assertion
   expect(res).toBe(9);
});
