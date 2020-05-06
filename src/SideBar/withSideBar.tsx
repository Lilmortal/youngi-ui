import { SideBarProps } from "./SideBar";

const withSidebar = <P extends SideBarProps>(Component: React.FC<P>) => (
  props: P
): React.ReactElement<P> => {
  const sideBarProps: SideBarProps = {
    ownerName: "Youngi Kim",
    aboutLinkText: "About me",
    worksLinkText: "Work",
  };

  return <Component {...props} {...sideBarProps} />;
};

export default withSidebar;
