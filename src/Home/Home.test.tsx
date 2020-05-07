import React from "react";
import Home from "./Home";
import { render } from "@testing-library/react";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

describe("Home", () => {
  it("should pass", () => {
    render(
      <Home
        description="I am a designer"
        homeImage="Biography"
        {...mockSideBar}
      />
    );
    expect(1 + 1).toEqual(2);
  });
});
