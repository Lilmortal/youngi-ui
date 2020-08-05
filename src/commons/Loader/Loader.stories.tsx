import React from "react";
import { storiesOf } from "@storybook/react";

import Loader, { LoaderProps } from "./Loader";

const defaultProps: LoaderProps = {};

const RenderedLoader: React.FC<Partial<LoaderProps>> = ({ ...props }) => (
  <Loader {...defaultProps} {...props} />
);

storiesOf("Loader", module).add("default", () => <RenderedLoader />);
