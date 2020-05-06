import React from "react";
import { storiesOf } from "@storybook/react";

import About from "./About";
import { mockSideBar } from "../SideBar/mock-sideBar";

storiesOf("About", module).add("default", () => (
  <About aboutText="Biography" {...mockSideBar} />
));
