import React from "react";
import { createBem } from "../../../utils";
import styles from "./Nav.module.scss";
import Link, { LinkProps } from "../Link";
import uuid from "react-uuid";

export interface NavProps {
  links: LinkProps[];
}

const bem = createBem(styles);

const Nav: React.FC<NavProps> = ({ links }) => (
  <div className={bem()}>
    {links.map((link) => (
      <Link {...link} key={uuid()} />
    ))}
  </div>
);

export default Nav;
