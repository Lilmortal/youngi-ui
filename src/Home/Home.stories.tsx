import React from "react";
import { storiesOf } from "@storybook/react";

import Home from "./Home";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

storiesOf("Home", module).add("default", () => (
  <Home description="I am a designer" homeImage="Biography" {...mockSideBar} />
));
