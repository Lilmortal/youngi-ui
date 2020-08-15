import React from "react";
import PortfolioNav, { usePortfolioLinks } from "../../commons/PortfolioNav";
import { NavProps } from "./withNav.types";
import Nav from "../../commons/Nav";
import useNav from "../../commons/Nav/useNav";
import Fade from "../../commons/Fade";
import Contact from "../../commons/Contact";
import { ContactProps } from "../../commons/Contact/Contact";

const withNav = <T extends object>(Component: React.FC<T>) => <
  P extends NavProps
>(
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

  return (
    <Fade duration={0.6} show>
      <PortfolioNav links={portfolioLinks} />
      <Nav links={navLinks} />
      <Component {...props} />
      <Contact {...contactLinks} />
    </Fade>
  );
};

export default withNav;
