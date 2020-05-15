import React from "react";
import { SidebarProps } from "./Sidebar";
import routes from "../../src/routes";

export interface InjectedSidebarProps {
  sidebarProps: SidebarProps;
}

const withSidebar = <P extends InjectedSidebarProps>(
  Component: React.FC<P>
) => (props: P): React.ReactElement<P> => {
  const sidebarProps: SidebarProps = {
    homeLink: {
      href: routes.home,
      content: "Youngi Kim",
    },
    aboutLink: {
      href: routes.about,
      content: "About me",
    },
    worksLink: {
      href: routes.works,
      content: "Work",
    },
  };

  return <Component {...props} sidebarProps={sidebarProps} />;
};

export default withSidebar;
