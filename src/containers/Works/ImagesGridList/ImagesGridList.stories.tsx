import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ImagesGridList, { ImagesGridProps } from "./ImagesGridList";

const images = Array(25).fill({
  url: "/dog.jpg",
  name: "dog",
});

const defaultProps: ImagesGridProps = {
  onImageClick: action(`onImageClick`),
};

storiesOf("ImagesGridList", module).add("with image", () => (
  <ImagesGridList {...defaultProps} images={images} />
));
