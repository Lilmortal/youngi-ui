import React from "react";
import { storiesOf } from "@storybook/react";

import PortfolioNav, { PortfolioNavProps } from "./PortfolioNav";

const defaultProps: PortfolioNavProps = {
  links: [
    {
      link: { href: `/[lang]/[category]`, as: `/en/category` },
      children: "category",
    },
    {
      link: { href: `/[lang]/[category]`, as: `/en/info` },
      children: "info",
    },
  ],
};

const RenderedPortfolioNav: React.FC<Partial<PortfolioNavProps>> = ({
  ...props
}) => <PortfolioNav {...defaultProps} {...props} />;

storiesOf("PortfolioNav", module).add("default", () => (
  <RenderedPortfolioNav />
));
