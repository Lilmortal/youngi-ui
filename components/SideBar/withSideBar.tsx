import React from "react";
import { SideBarProps } from "./SideBar";
import links from "../../src/links";

const withSidebar = <P extends SideBarProps>(Component: React.FC<P>) => (
  props: P
): React.ReactElement<P> => {
  const sideBarProps: SideBarProps = {
    homeLink: {
      href: links.home,
      name: "Youngi Kim",
    },
    aboutLink: {
      href: links.about,
      name: "About me",
    },
    worksLink: {
      href: links.works,
      name: "Work",
    },
  };

  return <Component {...props} {...sideBarProps} />;
};

export default withSidebar;
