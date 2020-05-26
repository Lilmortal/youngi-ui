import { SidebarProps } from "../Sidebar";
import getRoutes from "../../../routes";

const routes = getRoutes();
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
