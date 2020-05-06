import { cn } from "../utils";
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
  <aside className={cn(styles.sideBar)}>
    <div className={cn(styles.ownerName)}>{ownerName}</div>

    <div className={cn(styles.mainItems)}>{mainItems}</div>
    <div className={cn(styles.links)}>
      <a href="#">{aboutLinkText}</a>
      <a href="#">{worksLinkText}</a>
    </div>
  </aside>
);

export default SideBar;
