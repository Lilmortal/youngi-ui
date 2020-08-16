import React from "react";
import PortfolioNav, { usePortfolioLinks } from "../../commons/PortfolioNav";
import { NavProps, LayoutProps } from "./withNav.types";
import Nav from "../../commons/Nav";
import useNav from "../../commons/Nav/useNav";
import Fade from "../../commons/Fade";
import Contact from "../../commons/Contact";
import { ContactProps } from "../../commons/Contact";
import Copyright from "../../commons/Copyright";

const withNav = <T extends object>(Component: React.FC<T>) => ({
  displayCopyrightMark,
}: LayoutProps = {}) => <P extends NavProps>(
  props: T & P
): React.ReactElement<{}> => {
  const { navResponse, contactResponse, portfolioCategoriesResponse } = props;

  const navLinks = useNav({ navigations: navResponse });

  const portfolioLinks = usePortfolioLinks({
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

  return (
    <Fade duration={0.6} show>
      <PortfolioNav links={portfolioLinks} />
      <Nav links={navLinks} />
      <Component {...props} />
      <Contact {...contactLinks} />
      {displayCopyrightMark ? (
        <Copyright>
          {/* Put this in <FormattedMessage />  */}
          ALL RIGHTS RESERVED {currentYear} (C) YOUNGI KIM AND JACK TAN
        </Copyright>
      ) : null}
    </Fade>
  );
};

export default withNav;
