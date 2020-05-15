import React from "react";
import { storiesOf } from "@storybook/react";

import Works from "./Works";
import { mockSidebar } from "../../components/Sidebar/mock-sidebar";
import { mockWorksCmsResponse } from "./mock-data/data";
import { WorkProps } from "./Works.types";

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
  sidebarProps: { ...mockSidebar },
};

storiesOf("Works", module).add("default", () => <Works {...defaultProps} />);
