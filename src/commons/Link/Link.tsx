import React from "react";
import Link, { LinkProps } from "next/link";
import { cn, createBem } from "../../../utils";
import styles from "./Link.module.scss";

export interface CustomLinkProps {
  link: LinkProps;
  name: string;
}

const bem = createBem(styles);

const CustomLink: React.FC<CustomLinkProps> = ({ link, name }) => (
  <Link {...link}>
    <a className={cn(bem())}>{name}</a>
  </Link>
);

export default CustomLink;
