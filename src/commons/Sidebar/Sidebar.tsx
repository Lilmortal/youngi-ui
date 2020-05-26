import React from "react";
import Link from "next/link";

import { cn, createBem } from "../../../utils";
import styles from "./Sidebar.module.scss";

const bem = createBem(styles);

interface SidebarHrefProps {
  href: string;
  as: string;
}

interface SidebarLinkProps {
  link: SidebarHrefProps;
  content: React.ReactNode;
}

export interface SidebarProps extends Styleable {
  homeLink: SidebarLinkProps;
  aboutLink: SidebarLinkProps;
  worksLink: SidebarLinkProps;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  homeLink,
  aboutLink,
  worksLink,
  children,
  className,
  style,
}) => (
  <div className={cn(bem(), className)} style={style}>
    <div className={cn(bem("home"))}>
      <Link {...homeLink.link}>
        <a className={cn(bem("homeLinkContent"))}>{homeLink.content}</a>
      </Link>
    </div>

    <div className={cn(bem("bodyContent"))}>{children}</div>
    <nav className={cn(bem("navigation"))}>
      <Link {...aboutLink.link}>
        <a className={cn(bem("navigationContent"))}>{aboutLink.content}</a>
      </Link>
      <Link {...worksLink.link}>
        <a className={cn(bem("navigationContent"))}>{worksLink.content}</a>
      </Link>
    </nav>
  </div>
);

export default Sidebar;
