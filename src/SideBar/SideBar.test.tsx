import { render } from "@testing-library/react";
import SideBar from "./SideBar";

describe("Sidebar", () => {
  it("should pass", () => {
    render(
      <SideBar
        ownerName="Youngi Kim"
        aboutLinkText="About me"
        worksLinkText="Work"
      />
    );
    expect(1 + 1).toEqual(2);
  });
});
