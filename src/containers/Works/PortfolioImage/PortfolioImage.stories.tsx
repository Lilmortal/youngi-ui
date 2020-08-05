import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import PortfolioImage, { PortfolioImageProps } from "./PortfolioImage";

const defaultProps: PortfolioImageProps = {
  src: "image.jpg",
  name: "image",
  onClick: () => actions(`onClick`),
};

storiesOf("PortfolioImage", module).add("with image", () => (
  <PortfolioImage {...defaultProps} />
));
