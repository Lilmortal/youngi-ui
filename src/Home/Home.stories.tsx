import React from "react";
import { storiesOf } from "@storybook/react";

import Home from "./Home";
import { mockSideBar } from "../SideBar/mock-sideBar";

storiesOf("Home", module).add("default", () => (
  <Home homeImage="Biography" {...mockSideBar} />
));
