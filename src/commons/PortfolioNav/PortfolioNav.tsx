import React from "react";
import Link, { LinkProps } from "next/link";
import { cn, createBem } from "../../../utils";
import styles from "./PortfolioNav.module.scss";
import uuid from "react-uuid";

export interface PortfolioCategoriesLinks {
  href: LinkProps;
  name: string;
}

export interface PortfolioNavProps {
  links: PortfolioCategoriesLinks[];
}

const bem = createBem(styles);

const PortfolioNav: React.FC<PortfolioNavProps> = ({ links }) => (
  <div className={cn(bem())}>
    {links.map((link) => (
      <Link {...link.href} key={uuid()}>
        <a className={cn(bem("link"))}>{link.name}</a>
      </Link>
    ))}
  </div>
);

export default PortfolioNav;
