import React from "react";
import { storiesOf } from "@storybook/react";

import Footer, { FooterProps } from "./Footer";

const defaultProps: FooterProps = {
  leftComponent: "Left component",
  rightComponent: "Right component",
};

const RenderedFooter: React.FC<Partial<FooterProps>> = ({ ...props }) => (
  <Footer {...defaultProps} {...props} />
);

storiesOf("Link", module).add("default", () => <RenderedFooter />);
