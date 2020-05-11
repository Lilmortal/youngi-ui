import React from "react";
import Link from "next/link";

import { cn } from "../../utils";
import styles from "./Sidebar.module.scss";

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
  <div className={cn(styles.sidebar, classNames)} style={style}>
    <div className={cn(styles.home)}>
      <Link href={homeLink.href}>
        <a className={cn(styles.homeLinkContent)}>{homeLink.content}</a>
      </Link>
    </div>

    <div className={cn(styles.bodyContent)}>{children}</div>
    <nav className={cn(styles.navigation)}>
      <Link href={aboutLink.href}>
        <a className={cn(styles.navigationContent)}>{aboutLink.content}</a>
      </Link>
      <Link href={worksLink.href}>
        <a className={cn(styles.navigationContent)}>{worksLink.content}</a>
      </Link>
    </nav>
  </div>
);

export default Sidebar;
