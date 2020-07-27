import React from "react";
import { storiesOf } from "@storybook/react";

import { WorksWithoutNav } from "./Works";
import { mockWorksCmsResponse } from "./mock-data/data";
import { WorkProps } from "./Works.types";

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
};

storiesOf("Works", module).add("default", () => (
  <WorksWithoutNav {...defaultProps} />
));
