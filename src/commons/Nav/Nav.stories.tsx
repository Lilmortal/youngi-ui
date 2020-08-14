import React from "react";
import { storiesOf } from "@storybook/react";

import Nav, { NavProps } from "./Nav";

const defaultProps: NavProps = {
  links: [
    {
      link: { href: `/[lang]/[category]`, as: `/en/category` },
      name: "category",
    },
    {
      link: { href: `/[lang]/[category]`, as: `/en/info` },
      name: "info",
    },
  ],
};

const RenderedNav: React.FC<Partial<NavProps>> = ({ ...props }) => (
  <Nav {...defaultProps} {...props} />
);

storiesOf("Nav", module).add("default", () => <RenderedNav />);
