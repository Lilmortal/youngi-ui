import React from "react";
import { createBem } from "../../../utils";
import styles from "./Nav.module.scss";
import Link, { NextLinkProps } from "../Link";
import uuid from "react-uuid";

export interface NavProps {
  links: NextLinkProps[];
}

const bem = createBem(styles);

const Nav: React.FC<NavProps> = ({ links }) => (
  <nav className={bem()}>
    {links.map((link) => (
      <Link {...link} key={uuid()} className={bem("link")} />
    ))}
  </nav>
);

export default Nav;
