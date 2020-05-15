import React from "react";
import { storiesOf } from "@storybook/react";

import Works, { WorkProps } from "./Works";
import { mockSidebar } from "../../components/Sidebar/mock-sidebar";
import { mockWorksCmsResponse } from "./mock-data/data";

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
  sidebarProps: { ...mockSidebar },
};

storiesOf("Works", module).add("default", () => <Works {...defaultProps} />);
