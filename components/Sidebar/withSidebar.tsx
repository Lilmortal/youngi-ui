import React from "react";
import { SidebarProps } from "./Sidebar";
import links from "../../src/links";

export interface InjectedSidebarProps {
  sidebarProps: SidebarProps;
}

const withSidebar = <P extends InjectedSidebarProps>(
  Component: React.FC<P>
) => (props: P): React.ReactElement<P> => {
  const sidebarProps: SidebarProps = {
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

  return <Component {...props} sidebarProps={sidebarProps} />;
};

export default withSidebar;
