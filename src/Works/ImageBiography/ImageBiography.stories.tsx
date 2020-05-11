import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import ImageBiography, { ImageBiographyProps } from "./ImageBiography";

const defaultProps: ImageBiographyProps = {
  id: "1",
  onClose: () => actions("onClose"),
};

storiesOf("ImageBiography", module).add("default", () => (
  <ImageBiography {...defaultProps} open />
));
