import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import ImageModal, { ImageModalProps } from "./ImageModal";

const image = [
  {
    url: "/download.jpg",
    name: "image",
  },
];

const defaultProps: ImageModalProps = {
  onClose: () => actions("onClose"),
  open: true,
};

storiesOf("ImageModal", module).add("with image", () => (
  <ImageModal {...defaultProps} images={image} />
));
// .add("with description", () => (
//   <ImageModal {...defaultProps} description="Description" />
// ))
// .add("with image and description", () => (
//   <ImageModal {...defaultProps} image={image} description="Description" />
// ))
// .add("with error message", () => (
//   <ImageModal {...defaultProps} errorMessage="Error message" />
// ));
