import { SidebarProps } from "../Sidebar";
import links from "../../../src/links";

const mockSidebar: SidebarProps = {
  homeLink: {
    href: links.home,
    content: "Youngi Kim",
  },
  aboutLink: {
    href: links.about,
    content: "About",
  },
  worksLink: {
    href: links.works,
    content: "Work",
  },
};

export { mockSidebar };
