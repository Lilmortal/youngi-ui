import React from "react";
import { AnotherApp } from "./App";

import { render } from "@testing-library/react";

describe("test", () => {
  it("should pass", () => {
    const { container } = render(<AnotherApp />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        yeah
      </div>
    `);
  });
});
