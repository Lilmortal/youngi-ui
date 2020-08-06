import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ImageModal, { ImageModalProps } from "./ImageModal";

const image = [
  {
    url: "/facebook.jpg",
    name: "facebook",
  },
  {
    url: "/twitter.jpg",
    name: "twitter",
  },
  {
    url: "/instagram.jpg",
    name: "instagram",
  },
];

const defaultProps: ImageModalProps = {
  onClose: action("onClose"),
  open: true,
};

storiesOf("ImageModal", module).add("with image", () => (
  <ImageModal {...defaultProps} images={image} />
));
