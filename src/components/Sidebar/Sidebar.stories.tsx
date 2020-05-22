import React from "react";
import { storiesOf } from "@storybook/react";

import messages from "./Sidebar.messages";
import Sidebar, { SidebarProps } from "./Sidebar";
import routes from "../../routes";
import { FormattedMessage } from "react-intl";

const defaultProps: SidebarProps = {
  homeLink: {
    href: routes.home,
    content: <FormattedMessage {...messages} />,
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

storiesOf("Sidebar", module)
  .add("without content", () => <Sidebar {...defaultProps} />)
  .add("with content", () => (
    <Sidebar {...defaultProps}>This is a body content</Sidebar>
  ));
