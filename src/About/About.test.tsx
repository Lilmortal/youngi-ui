import React from "react";
import About from "./About";
import { render } from "@testing-library/react";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

describe("About", () => {
  it("should pass", () => {
    render(<About aboutText="Biography" {...mockSideBar} />);
    expect(1 + 1).toEqual(2);
  });
});
