import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ImagesGrid, { ImagesGridProps } from "./ImagesGrid";
import { mockMainImagesGrid } from "../mock-data/data";
import { mockBreakpoints } from "../../../commons/breakpoints/mock-data/data";

const defaultProps: ImagesGridProps = {
  breakpoints: mockBreakpoints,
  onImageClick: action(`onImageClick`),
  numberOfColumns: 20,
  rowPixels: 50,
};

storiesOf("ImagesGrid", module).add("with image", () => (
  <ImagesGrid {...defaultProps} imagesGrid={mockMainImagesGrid} />
));
