import React from "./node_modules/react";
import { storiesOf } from "./node_modules/@storybook/react";

import Sidebar, { SidebarProps } from "./Sidebar";
import links from "../../src/links";

const defaultProps: SidebarProps = {
  homeLink: {
    href: links.home,
    content: "Youngi Kim",
  },
  aboutLink: {
    href: links.about,
    content: "About me",
  },
  worksLink: {
    href: links.works,
    content: "Work",
  },
};

storiesOf("Sidebar", module)
  .add("without content", () => <Sidebar {...defaultProps} />)
  .add("with content", () => (
    <Sidebar {...defaultProps}>This is a body content</Sidebar>
  ));
