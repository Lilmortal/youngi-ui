import React from "react";
import Link, { LinkProps } from "next/link";
import { cn, createBem } from "../../../utils";
import styles from "./Link.module.scss";

export interface CustomLinkProps extends Styleable {
  link: LinkProps;
  name: string;
}

const bem = createBem(styles);

const CustomLink: React.FC<CustomLinkProps> = ({
  link,
  name,
  className,
  style,
}) => (
  <Link {...link}>
    <a className={cn(bem(), className)} style={style}>
      {name}
    </a>
  </Link>
);

export default CustomLink;
