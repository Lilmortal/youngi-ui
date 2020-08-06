import React from "react";
import { storiesOf } from "@storybook/react";

import { InfoWithoutNav, InfoProps } from "./Info";
import { mockAboutCmsResponse } from "./mock-data/data";

const defaultProps: InfoProps = {
  ...mockAboutCmsResponse,
};

storiesOf("Info", module).add("default", () => (
  <InfoWithoutNav {...defaultProps} />
));
