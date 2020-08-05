import React from "react";
import { storiesOf } from "@storybook/react";

import Link, { LinkProps } from ".";

const defaultProps: LinkProps = {
  link: {
    href: `/[lang]/[works]`,
    as: `/en/works`,
  },
  name: "works",
};

const RenderedLink: React.FC<Partial<LinkProps>> = ({ ...props }) => (
  <Link {...defaultProps} {...props} />
);

storiesOf("Link", module).add("default", () => <RenderedLink />);
