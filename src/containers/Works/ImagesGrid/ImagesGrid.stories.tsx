import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ImagesGrid, { ImagesGridProps } from "./ImagesGrid";

const images = Array(25).fill({
  url: "/dog.jpg",
  name: "dog",
});

const defaultProps: ImagesGridProps = {
  onImageClick: action(`onImageClick`),
};

storiesOf("ImagesGrid", module).add("with image", () => (
  <ImagesGrid {...defaultProps} images={images} />
));
