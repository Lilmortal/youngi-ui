import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import ImageModal, { ImageModalProps } from "./ImageModal";

const defaultProps: ImageModalProps = {
  image: {
    url: "/download.jpg",
    name: "image",
  },
  onClose: () => actions("onClose"),
};

storiesOf("ImageModal", module).add("default", () => (
  <ImageModal {...defaultProps} open />
));
