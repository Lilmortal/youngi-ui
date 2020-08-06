import React from "react";
import { storiesOf } from "@storybook/react";

import Link, { LinkProps } from ".";
import MockRouter from "./MockRouter";

const defaultProps: LinkProps = {
  link: {
    href: `/[lang]/[works]`,
    as: `/en/works`,
  },
  name: "works",
};

const RenderedLink: React.FC<Partial<LinkProps>> = ({ ...props }) => (
  <MockRouter>
    <Link {...defaultProps} {...props} />
  </MockRouter>
);

storiesOf("Link", module).add("default", () => <RenderedLink />);
