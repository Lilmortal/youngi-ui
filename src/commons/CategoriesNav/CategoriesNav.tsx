import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./CategoriesNav.module.scss";
import uuid from "react-uuid";
import Link, { NextLinkProps } from "../Link";

export interface CategoriesNavProps {
  links: NextLinkProps[];
}

const bem = createBem(styles);

const CategoriesNav: React.FC<CategoriesNavProps> = ({ links }) => (
  <nav className={cn(bem())}>
    {links.map((link) => (
      <Link {...link} key={uuid()} className={cn(bem("link"))} />
    ))}
  </nav>
);

export default CategoriesNav;
