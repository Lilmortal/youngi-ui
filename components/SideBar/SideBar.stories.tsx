import React from "react";
import { storiesOf } from "@storybook/react";

import SideBar from "./SideBar";

storiesOf("SideBar", module).add("default", () => (
  <SideBar
    ownerName="Youngi Kim"
    aboutLinkText="About me"
    worksLinkText="Work"
  />
));
