import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../components/Footer";

describe("Footer", () => {
  //for isLoading is true
  it("When isLoading is 1 then 'Loading more...' text should be display", () => {
    //Arrange and Act
    const { debug } = render(
      <Footer count={100} isLoading={true} setObserve={jest.fn()} />
    );
    debug();
    //Assertion
    const text = screen.queryByText("Loading more...").innerHTML;
    expect(text).toBe("Loading more...");
  }),
    //For isLoading False
    it("When isLoading is 0 then 'No more user' text should be display", () => {
      //Arrange and Act
      const { debug } = render(
        <Footer count={100} isLoading={false} setObserve={jest.fn()} />
      );
      debug();
      //Assertion
      const text = screen.queryByText("No more user").innerHTML;
      expect(text).toBe("No more user");
    });
});
