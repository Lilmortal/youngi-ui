import { SideBarProps } from "../SideBar";
import links from "../../../src/links";

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
