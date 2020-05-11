import React from "./node_modules/react";
import { SidebarProps } from "./Sidebar";
import links from "../../src/links";

const withSidebar = <P extends SidebarProps>(Component: React.FC<P>) => (
  props: P
): React.ReactElement<P> => {
  const sideBarProps: SidebarProps = {
    homeLink: {
      href: links.home,
      content: "Youngi Kim",
    },
    aboutLink: {
      href: links.about,
      content: "About me",
    },
    worksLink: {
      href: links.works,
      content: "Work",
    },
  };

  return <Component {...props} {...sideBarProps} />;
};

export default withSidebar;
