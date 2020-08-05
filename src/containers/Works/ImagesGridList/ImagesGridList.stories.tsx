import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import ImagesGridList, { ImagesGridProps } from "./ImagesGridList";

const images = [
  {
    url: "/facebook.jpg",
    name: "facebook",
  },
  {
    url: "/youtube.jpg",
    name: "youtube",
  },
  {
    url: "/instagram.jpg",
    name: "instagram",
  },
].fill(
  {
    url: "/facebook.jpg",
    name: "facebook",
  },
  3,
  25
);

const defaultProps: ImagesGridProps = {
  onImageClick: (image) => actions(`onImageClick ${image}`),
};

storiesOf("ImagesGridList", module).add("with image", () => (
  <ImagesGridList {...defaultProps} images={images} />
));
