import React from "react";
import { storiesOf } from "@storybook/react";

import { PortfolioWithoutNav } from "./Portfolio";
import { mockPortfolioCmsResponse } from "./mock-data/data";
import { PortfolioProps } from "./Portfolio.types";
import MockRouter from "../../commons/Link/MockRouter";

const defaultProps: PortfolioProps = {
  ...mockPortfolioCmsResponse,
};

const RenderedPortfolio: React.FC<
  Partial<PortfolioProps> & { category?: string }
> = (props) => (
  <MockRouter value={{ query: { category: props.category } }}>
    <PortfolioWithoutNav {...defaultProps} {...props} />
  </MockRouter>
);

storiesOf("Portfolio", module)
  .add("default", () => <RenderedPortfolio />)
  .add("filtered to architecture category", () => (
    <RenderedPortfolio category="architecture" />
  ))
  .add("filtered to photography category", () => (
    <RenderedPortfolio category="photography" />
  ));
