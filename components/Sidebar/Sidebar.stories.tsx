import React from "react";
import { storiesOf } from "@storybook/react";

import Sidebar, { SidebarProps } from "./Sidebar";
import routes from "../../src/routes";

const defaultProps: SidebarProps = {
  homeLink: {
    href: routes.home,
    content: "Youngi Kim",
  },
  aboutLink: {
    href: routes.about,
    content: "About me",
  },
  worksLink: {
    href: routes.works,
    content: "Work",
  },
};

storiesOf("Sidebar", module)
  .add("without content", () => <Sidebar {...defaultProps} />)
  .add("with content", () => (
    <Sidebar {...defaultProps}>This is a body content</Sidebar>
  ));
