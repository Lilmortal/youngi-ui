import React from "react";
import { storiesOf } from "@storybook/react";

import SideBar, { SideBarProps } from "./SideBar";

const defaultProps: SideBarProps = {
  ownerName: "Youngi Kim",
  aboutLinkText: "About me",
  worksLinkText: "Work",
};

storiesOf("SideBar", module).add("default", () => (
  <SideBar {...defaultProps} />
));
