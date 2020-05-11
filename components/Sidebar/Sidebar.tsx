import React from "react";
import Link from "next/link";

import { cn, createBem } from "../../utils";
import styles from "./Sidebar.module.scss";

const bem = createBem(styles);

interface SidebarLinkProps {
  href: string;
  content: string;
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
  classNames,
  style,
}) => (
  <div className={cn(bem(), classNames)} style={style}>
    <div className={cn(bem("home"))}>
      <Link href={homeLink.href}>
        <a className={cn(bem("homeLinkContent"))}>{homeLink.content}</a>
      </Link>
    </div>

    <div className={cn(bem("bodyContent"))}>{children}</div>
    <nav className={cn(bem("navigation"))}>
      <Link href={aboutLink.href}>
        <a className={cn(bem("navigationContent"))}>{aboutLink.content}</a>
      </Link>
      <Link href={worksLink.href}>
        <a className={cn(bem("navigationContent"))}>{worksLink.content}</a>
      </Link>
    </nav>
  </div>
);

export default Sidebar;
