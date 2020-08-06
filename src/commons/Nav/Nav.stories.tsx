import React from "react";
import { storiesOf } from "@storybook/react";

import Nav, { NavProps } from "./Nav";

const defaultProps: NavProps = {
  links: [
    {
      link: { href: `/[lang]/[works]`, as: `/en/works` },
      name: "works",
    },
    {
      link: { href: `/[lang]/[works]`, as: `/en/info` },
      name: "info",
    },
  ],
};

const RenderedNav: React.FC<Partial<NavProps>> = ({ ...props }) => (
  <Nav {...defaultProps} {...props} />
);

storiesOf("Nav", module).add("default", () => <RenderedNav />);
