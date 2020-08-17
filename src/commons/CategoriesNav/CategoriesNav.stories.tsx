import React from "react";
import { storiesOf } from "@storybook/react";

import CategoriesNav, { CategoriesNavProps } from "./CategoriesNav";

const defaultProps: CategoriesNavProps = {
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

const RenderedCategoriesNav: React.FC<Partial<CategoriesNavProps>> = ({
  ...props
}) => <CategoriesNav {...defaultProps} {...props} />;

storiesOf("CategoriesNav", module).add("default", () => (
  <RenderedCategoriesNav />
));
