import React from "react";
import { storiesOf } from "@storybook/react";

import About from "./About";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

storiesOf("About", module).add("default", () => (
  <About photoImage="" aboutText="Biography" {...mockSideBar} />
));
