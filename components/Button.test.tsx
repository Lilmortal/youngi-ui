import React from "react";
import Button from "./Button";

import { render } from "@testing-library/react";

describe("test", () => {
  it("should pass", () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchInlineSnapshot("");
  });
});
