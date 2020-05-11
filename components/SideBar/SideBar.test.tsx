import React from "react";
import { render, RenderResult } from "@testing-library/react";
import SideBar, { SideBarProps } from "./SideBar";
import links from "../../src/links";

const homeLink = {
  href: links.home,
  name: "Youngi Kim",
};
const aboutLink = {
  href: links.about,
  name: "About me",
};

const worksLink = {
  href: links.works,
  name: "Work",
};

const defaultProps: SideBarProps = {
  homeLink,
  aboutLink,
  worksLink,
};

const renderSidebar = (props?: Partial<SideBarProps>): RenderResult =>
  render(<SideBar {...defaultProps} {...props} />);

describe("sidebar", () => {
  it("should display the home link", () => {
    const { getByText } = renderSidebar();

    const homePageLink = getByText(homeLink.name);
    expect(homePageLink).toBeInTheDocument();
  });

  it("should display the work link", () => {
    const { getByText } = renderSidebar();

    const workPageLink = getByText(worksLink.name);
    expect(workPageLink).toBeInTheDocument();
  });

  it("should display the about link", () => {
    const { getByText } = renderSidebar();

    const aboutPageLink = getByText(aboutLink.name);
    expect(aboutPageLink).toBeInTheDocument();
  });
});

// interface LinkMock<T> {
//   children: T;
// }

// jest.mock("next/link", () => {
//   return <T extends object>({ children }: LinkMock<T>): T => {
//     return children;
//   };
// });
// it("should redirect to home page on owner link clicked", () => {
//   const { container, getByText } = renderSidebar();

//   const homePageLink = getByText(homeLink.name);
//   fireEvent.click(homePageLink);

//   expect(container.innerHTML).toEqual("");
//   // expect(window.location.href).toEqual("http://localhost/");
// });
