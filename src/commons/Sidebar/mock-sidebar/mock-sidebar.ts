import { SidebarProps } from "../Sidebar";
import getRoutes from "../../../routes";

const routes = getRoutes();
const mockSidebar: SidebarProps = {
  homeLink: {
    link: {
      href: "/[lang]",
      as: routes.home,
    },
    content: "Youngi Kim",
  },
  aboutLink: {
    link: {
      href: "/[lang]/about",
      as: routes.about,
    },
    content: "About",
  },
  worksLink: {
    link: {
      href: "/[lang]/works",
      as: routes.works,
    },
    content: "Work",
  },
};

export { mockSidebar };
