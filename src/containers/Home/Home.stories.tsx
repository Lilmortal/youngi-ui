import React from "react";
import { storiesOf } from "@storybook/react";

import Home, { HomeProps } from "./Home";
import { mockSidebar } from "../../commons/Sidebar/mock-sidebar";
import { mockHomeCmsResponse } from "./mock-data/data";

const defaultProps: HomeProps = {
  ...mockHomeCmsResponse,
  sidebarProps: { ...mockSidebar },
};

storiesOf("Home", module).add("default", () => <Home {...defaultProps} />);
