import React from "react";
import Link from "next/link";

import { cn } from "../../utils";
import styles from "./SideBar.module.scss";

interface SideBarLinkProps {
  name: string;
  href: string;
}

export interface SideBarProps {
  homeLink: SideBarLinkProps;
  aboutLink: SideBarLinkProps;
  worksLink: SideBarLinkProps;
  children?: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({
  homeLink,
  aboutLink,
  worksLink,
  children,
}) => (
  <div className={cn(styles.sideBarContainer)}>
    <aside className={cn(styles.sideBar)}>
      <div className={cn(styles.header)}>
        <Link href={homeLink.href}>
          <a className={cn(styles.ownerName)}>{homeLink.name}</a>
        </Link>
      </div>

      <div className={cn(styles.mainItems)}>{children}</div>
      <div className={cn(styles.links)}>
        <Link href={aboutLink.href}>
          <a>{aboutLink.name}</a>
        </Link>
        <Link href={worksLink.href}>
          <a>{worksLink.name}</a>
        </Link>
      </div>
    </aside>
  </div>
);

export default SideBar;
