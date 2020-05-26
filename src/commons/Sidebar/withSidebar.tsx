import React, { useContext } from "react";
import { SidebarProps } from "./Sidebar";

import messages from "./Sidebar.messages";
import { FormattedMessage } from "react-intl";
import getRoutes from "../../routes";
import { IntlProviderContext } from "../intl/IntlProvider";
export interface InjectedSidebarProps {
  sidebarProps?: SidebarProps;
}

const withSidebar = <P extends InjectedSidebarProps>(
  Component: React.FC<P>
) => (props: P): React.ReactElement<P> => {
  const context = useContext(IntlProviderContext);
  const routes = getRoutes(context.locale);

  const sidebarProps: SidebarProps = {
    homeLink: {
      link: {
        href: "/[lang]",
        as: routes.home,
      },
      content: <FormattedMessage {...messages.homeMessage} />,
    },
    aboutLink: {
      link: {
        href: "/[lang]/about",
        as: routes.about,
      },
      content: <FormattedMessage {...messages.aboutLink} />,
    },
    worksLink: {
      link: {
        href: "/[lang]/works",
        as: routes.works,
      },
      content: <FormattedMessage {...messages.worksLink} />,
    },
  };

  return <Component {...props} sidebarProps={sidebarProps} />;
};

export default withSidebar;
