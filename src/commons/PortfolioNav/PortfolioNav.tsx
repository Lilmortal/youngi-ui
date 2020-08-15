import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./PortfolioNav.module.scss";
import uuid from "react-uuid";
import Link, { NextLinkProps } from "../Link";

export interface PortfolioNavProps {
  links: NextLinkProps[];
}

const bem = createBem(styles);

const PortfolioNav: React.FC<PortfolioNavProps> = ({ links }) => (
  <div className={cn(bem())}>
    {links.map((link) => (
      <Link {...link} key={uuid()} className={cn(bem("link"))} />
    ))}
  </div>
);

export default PortfolioNav;
