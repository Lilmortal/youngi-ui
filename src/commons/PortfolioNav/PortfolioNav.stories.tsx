import React from "react";
import { storiesOf } from "@storybook/react";

import PortfolioNav, { PortfolioNavProps } from "./PortfolioNav";

const defaultProps: PortfolioNavProps = {
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

const RenderedPortfolioNav: React.FC<Partial<PortfolioNavProps>> = ({
  ...props
}) => <PortfolioNav {...defaultProps} {...props} />;

storiesOf("PortfolioNav", module).add("default", () => (
  <RenderedPortfolioNav />
));
