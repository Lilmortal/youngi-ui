import React, { useContext } from "react";
import Footer from "../../commons/Footer";
import { BreakpointContext } from "../../commons/breakpoints";
import Copyright from "../../commons/Copyright";
import { FormattedMessage } from "react-intl";
import messages from "./Main.messages";
import Contact, { ContactProps } from "../../commons/Contact";
import useNav from "../../commons/Nav/useNav";
import CategoriesNav, { useCategoriesLinks } from "../../commons/CategoriesNav";
import { NavProps } from "./Main.types";
import Fade from "../../commons/Fade";
import Nav from "../../commons/Nav";

export interface MainProps extends NavProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({
  children,
  navResponse,
  contactResponse,
  portfolioCategoriesResponse,
}) => {
  const breakpoints = useContext(BreakpointContext);

  const navLinks = useNav({ navigations: navResponse });

  const categoriesLinks = useCategoriesLinks({
    categories: portfolioCategoriesResponse,
  });

  const contactLinks: ContactProps = {
    links: [
      ...contactResponse.map((response) => ({
        externalLink: response.url,
        children: response.name,
      })),
    ],
  };

  const currentYear = new Date().getFullYear();

  const CopyrightComponent = (
    <Copyright>
      {!breakpoints.sm ? (
        <FormattedMessage
          {...messages.copyrightMobile}
          values={{ currentYear }}
        />
      ) : null}
      {breakpoints.sm ? (
        <FormattedMessage {...messages.copyright} values={{ currentYear }} />
      ) : null}
    </Copyright>
  );

  const ContactComponent = <Contact {...contactLinks} />;

  return (
    <Fade duration={0.6} show>
      <CategoriesNav links={categoriesLinks} />
      <Nav links={navLinks} />
      <div>{children}</div>

      <Footer
        leftComponent={CopyrightComponent}
        rightComponent={ContactComponent}
      />
    </Fade>
  );
};
export default Main;
