import React from "react";
import { storiesOf } from "@storybook/react";

import Home, { HomeProps } from "./Home";
import { mockSidebar } from "../../components/SideBar/mock-sidebar";

const defaultProps: HomeProps = {
  sidebarBiography: "I am a designer with architectural background.",
  mainImage: "/download.jpg",
  ...mockSidebar,
};

storiesOf("Home", module).add("default", () => <Home {...defaultProps} />);
