import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import getRoutes from "../../routes";

const routes = getRoutes();

const homeLink = {
  link: {
    href: "",
    as: routes.home,
  },
  content: "Youngi Kim",
};
const aboutLink = {
  link: {
    href: "",
    as: routes.about,
  },
  content: "About me",
};

const worksLink = {
  link: {
    href: "",
    as: routes.works,
  },
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
