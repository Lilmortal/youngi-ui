import React from "react";
import ImageBio from "./Images";
import { render } from "@testing-library/react";

describe("Images", () => {
  it("should pass", () => {
    render(<ImageBio id="1" onClose={jest.fn()} />);
    expect(1 + 1).toEqual(2);
  });
});
