import React from "react";
import Works from "./Works";
import { render } from "@testing-library/react";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

describe("Works", () => {
  it("should pass", () => {
    render(
      <Works
        categories={[
          {
            name: "Photography",
          },
          { name: "Illustration" },
          { name: "Architecture" },
        ]}
        imageBios={[
          { id: 1, image: "image", name: "name", type: "Architecture" },
        ]}
        {...mockSideBar}
      />
    );
    expect(1 + 1).toEqual(2);
  });
});
