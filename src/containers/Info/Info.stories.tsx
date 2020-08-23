import React from "react";
import { storiesOf } from "@storybook/react";

import { Info, InfoProps } from "./Info";
import { mockAboutCmsResponse } from "./mock-data/data";

const defaultProps: InfoProps = {
  ...mockAboutCmsResponse,
};

storiesOf("Info", module).add("default", () => <Info {...defaultProps} />);
