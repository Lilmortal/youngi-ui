import React from "react";
import App from "./App";

import { render } from "@testing-library/react";

describe("test", () => {
  it("should pass", () => {
    const { container } = render(<App />);

    expect(container.firstChild).toMatchInlineSnapshot("");
  });
});
