import React from "react";
import { storiesOf } from "@storybook/react";

import About, { AboutProps } from "./About";
import { mockAboutCmsResponse } from "./mock-data/data";

const defaultProps: AboutProps = {
  ...mockAboutCmsResponse,
};

storiesOf("About", module).add("default", () => <About {...defaultProps} />);
