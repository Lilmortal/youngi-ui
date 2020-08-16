import React from "react";
import Link, { LinkProps } from "next/link";
import { cn, createBem } from "../../../utils";
import styles from "./Link.module.scss";

export interface NextLinkProps extends Styleable {
  link?: LinkProps;
  externalLink?: string;
  children: React.ReactNode;
}

const bem = createBem(styles);

const NextLink: React.FC<NextLinkProps> = ({
  link,
  children,
  externalLink,
  className,
  style,
}) => {
  const anchor = (
    <a
      className={cn(bem(), className)}
      style={style}
      href={externalLink}
      tabIndex={externalLink ? undefined : 0}
    >
      {children}
    </a>
  );

  if (link) {
    return <Link {...link}>{anchor}</Link>;
  }

  return anchor;
};

export default NextLink;
