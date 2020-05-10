import React from "react";
import { storiesOf } from "@storybook/react";

import SideBar, { SideBarProps } from "./SideBar";
import links from "../../pages/links";

const defaultProps: SideBarProps = {
  homeLink: {
    href: links.home,
    name: "Youngi Kim",
  },
  aboutLink: {
    href: links.about,
    name: "About me",
  },
  worksLink: {
    href: links.works,
    name: "Work",
  },
};

storiesOf("SideBar", module).add("default", () => (
  <SideBar {...defaultProps} />
));
