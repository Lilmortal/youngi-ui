import React from "react";
import { storiesOf } from "@storybook/react";

import Link, { NextLinkProps } from ".";
import MockRouter from "./MockRouter";

const defaultProps: NextLinkProps = {
  link: {
    href: `/[lang]/[category]`,
    as: `/en/category`,
  },
  children: "category",
};

const RenderedLink: React.FC<Partial<NextLinkProps>> = ({ ...props }) => (
  <MockRouter>
    <Link {...defaultProps} {...props} />
  </MockRouter>
);

storiesOf("Link", module).add("default", () => <RenderedLink />);
