import React from "react";
import Link from "next/link";

import { cn } from "../../utils";
import styles from "./SideBar.module.scss";

export interface SideBarProps {
  ownerName: string;
  aboutLinkText: string;
  worksLinkText: string;
  mainItems?: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({
  ownerName,
  aboutLinkText,
  worksLinkText,
  mainItems,
}) => (
  <div className={cn(styles.sideBarContainer)}>
    <aside className={cn(styles.sideBar)}>
      <div className={cn(styles.header)}>
        <Link href="/">
          <a className={cn(styles.ownerName)}>{ownerName}</a>
        </Link>
      </div>

      <div className={cn(styles.mainItems)}>{mainItems}</div>
      <div className={cn(styles.links)}>
        <Link href="/about">
          <a>{aboutLinkText}</a>
        </Link>
        <Link href="/works">
          <a>{worksLinkText}</a>
        </Link>
      </div>
    </aside>
  </div>
);

export default SideBar;
