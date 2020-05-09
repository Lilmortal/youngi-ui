import React from "react";
import { storiesOf } from "@storybook/react";

import Home, { HomeProps } from "./Home";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

const defaultProps: HomeProps = {
  description: "I am a designer with architectural background.",
  homeImage: "/download.jpg",
};

storiesOf("Home", module).add("default", () => (
  <Home {...defaultProps} {...mockSideBar} />
));
