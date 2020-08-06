import React from "react";
import { storiesOf } from "@storybook/react";

import { WorksWithoutNav } from "./Works";
import { mockWorksCmsResponse } from "./mock-data/data";
import { WorkProps } from "./Works.types";
import MockRouter from "../../commons/Link/MockRouter";

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
};

const RenderedWorks: React.FC<Partial<WorkProps> & { works?: string }> = (
  props
) => (
  <MockRouter value={{ query: { works: props.works } }}>
    <WorksWithoutNav {...defaultProps} {...props} />
  </MockRouter>
);

storiesOf("Works", module)
  .add("default", () => <RenderedWorks />)
  .add("filtered to architecture works", () => (
    <RenderedWorks works="architecture" />
  ))
  .add("filtered to photography works", () => (
    <RenderedWorks works="photography" />
  ));
