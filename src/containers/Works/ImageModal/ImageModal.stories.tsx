import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import ImageModal, { ImageModalProps } from "./ImageModal";

const image = [
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
];

const defaultProps: ImageModalProps = {
  onClose: () => actions("onClose"),
  open: true,
};

storiesOf("ImageModal", module).add("with image", () => (
  <ImageModal {...defaultProps} images={image} />
));
