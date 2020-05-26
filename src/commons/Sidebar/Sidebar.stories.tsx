import React from "react";
import { storiesOf } from "@storybook/react";

import Sidebar, { SidebarProps } from "./Sidebar";
import getRoutes from "../../routes";

const routes = getRoutes();
const defaultProps: SidebarProps = {
  homeLink: {
    link: {
      href: "",
      as: routes.home,
    },
    content: "Home",
  },
  aboutLink: {
    link: {
      href: "",
      as: routes.about,
    },
    content: "About me",
  },
  worksLink: {
    link: {
      href: "",
      as: routes.works,
    },
    content: "Work",
  },
};

storiesOf("Sidebar", module)
  .add("without content", () => <Sidebar {...defaultProps} />)
  .add("with content", () => (
    <Sidebar {...defaultProps}>This is a body content</Sidebar>
  ));
