import React from "./node_modules/react";
import { render, RenderResult } from "./node_modules/@testing-library/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import links from "../../src/links";

const homeLink = {
  href: links.home,
  content: "Youngi Kim",
};
const aboutLink = {
  href: links.about,
  content: "About me",
};

const worksLink = {
  href: links.works,
  content: "Work",
};

const defaultProps: SidebarProps = {
  homeLink,
  aboutLink,
  worksLink,
};

const renderSidebar = (props?: Partial<SidebarProps>): RenderResult =>
  render(<Sidebar {...defaultProps} {...props} />);

describe("sidebar", () => {
  it("should display the home link", () => {
    const { getByText } = renderSidebar();

    const homePageLink = getByText(homeLink.content);
    expect(homePageLink).toBeInTheDocument();
  });

  it("should display the work link", () => {
    const { getByText } = renderSidebar();

    const workPageLink = getByText(worksLink.content);
    expect(workPageLink).toBeInTheDocument();
  });

  it("should display the about link", () => {
    const { getByText } = renderSidebar();

    const aboutPageLink = getByText(aboutLink.content);
    expect(aboutPageLink).toBeInTheDocument();
  });

  it("should display the main content", () => {
    const { getByText } = renderSidebar({ children: <div>Content</div> });

    const aboutPageLink = getByText("Content");
    expect(aboutPageLink).toBeInTheDocument();
  });
});
