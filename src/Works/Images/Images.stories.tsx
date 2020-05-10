import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import ImageBio, { ImageBioProps } from "./Images";

const defaultProps: ImageBioProps = {
  id: "1",
  onClose: () => actions("onClose"),
};

storiesOf("Images", module).add("default", () => (
  <ImageBio {...defaultProps} open />
));
