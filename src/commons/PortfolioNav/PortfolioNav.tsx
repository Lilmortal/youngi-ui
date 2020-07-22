import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./PortfolioNav.module.scss";
import uuid from "react-uuid";
import { Link, LinkProps } from "../Link";

export interface PortfolioNavProps {
  links: LinkProps[];
}

const bem = createBem(styles);

const PortfolioNav: React.FC<PortfolioNavProps> = ({ links }) => (
  <div className={cn(bem())}>
    {links.map((link) => (
      <Link {...link} key={uuid()} />
    ))}
  </div>
);

export default PortfolioNav;
