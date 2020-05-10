import { SideBarProps } from "../SideBar";
import links from "../../../pages/links";

const mockSideBar: SideBarProps = {
  homeLink: {
    href: links.home,
    name: "Youngi Kim",
  },
  aboutLink: {
    href: links.about,
    name: "About",
  },
  worksLink: {
    href: links.works,
    name: "Work",
  },
};

export { mockSideBar };
