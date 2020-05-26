import React from "react";
import { storiesOf } from "@storybook/react";

import About, { AboutProps } from "./About";
import { mockSidebar } from "../../commons/Sidebar/mock-sidebar";
import { mockAboutCmsResponse } from "./mock-data/data";

const defaultProps: AboutProps = {
  ...mockAboutCmsResponse,
  sidebarProps: { ...mockSidebar },
};

storiesOf("About", module).add("default", () => <About {...defaultProps} />);