import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PortfolioImage, { PortfolioImageProps } from "./PortfolioImage";

const defaultProps: PortfolioImageProps = {
  src: "dog.jpg",
  name: "dog",
  onClick: action(`onClick`),
  width: 50,
  height: 50,
};

storiesOf("PortfolioImage", module).add("with image", () => (
  <PortfolioImage {...defaultProps} />
));
