import React from "react";
import ImageBiography from "./ImageBiography";
import { render } from "@testing-library/react";

describe("ImageBiography", () => {
  it("should pass", () => {
    render(<ImageBiography id="1" onClose={jest.fn()} />);
    expect(1 + 1).toEqual(2);
  });
});
