import { SidebarProps } from "../Sidebar";
import routes from "../../../src/routes";

const mockSidebar: SidebarProps = {
  homeLink: {
    href: routes.home,
    content: "Youngi Kim",
  },
  aboutLink: {
    href: routes.about,
    content: "About",
  },
  worksLink: {
    href: routes.works,
    content: "Work",
  },
};

export { mockSidebar };
