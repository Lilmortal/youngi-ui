import React from "react";
import { storiesOf } from "@storybook/react";

import Loader, { LoaderProps } from "./Loader";

const defaultProps: LoaderProps = {
  animate: true,
  loaderText: "YOUNGI KIM",
};

const RenderedLoader: React.FC<Partial<LoaderProps>> = ({ ...props }) => (
  <Loader {...defaultProps} {...props} />
);

storiesOf("Loader", module)
  .add("animate", () => <RenderedLoader />)
  .add("not animated", () => <RenderedLoader animate={false} />);
