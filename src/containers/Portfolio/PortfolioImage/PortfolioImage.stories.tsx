import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PortfolioImage, { PortfolioImageProps } from "./PortfolioImage";
import { randomGeneratedImage } from "../mock-data/data";

const defaultProps: PortfolioImageProps = {
  src: randomGeneratedImage.url,
  name: randomGeneratedImage.name,
  hoveredTextFontSizes: "sm",
  onClick: action(`onClick`),
  style: { width: 250, height: 250 },
};

const RenderedPortfolioImage: React.FC<Partial<PortfolioImageProps>> = (
  props?: Partial<PortfolioImageProps>
) => <PortfolioImage {...defaultProps} {...props} />;

storiesOf("PortfolioImage", module).add("with image", () => (
  <RenderedPortfolioImage />
));
