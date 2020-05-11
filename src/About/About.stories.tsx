import React from "react";
import { storiesOf } from "@storybook/react";

import About, { AboutProps } from "./About";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

const defaultProps: AboutProps = {
  profileImageLink: "/download.jpg",
  description:
    "# Hi there!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ...mockSideBar,
};

storiesOf("About", module).add("default", () => <About {...defaultProps} />);
