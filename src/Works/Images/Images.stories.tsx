import React from "react";
import { storiesOf } from "@storybook/react";

import ImageBio from "./Images";

storiesOf("Images", module).add("default", () => (
  <ImageBio id="1" onClose={jest.fn()} />
));
