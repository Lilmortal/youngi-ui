import React from "react";
import PortfolioNav, { usePortfolioLinks } from "../../commons/PortfolioNav";
import { NavProps } from "./withNav.types";
import Nav from "../../commons/Nav";
import useNav from "../../commons/Nav/useNav";
import Fade from "../../commons/Fade";

const withNav = <T extends object>(Component: React.FC<T>) => <
  P extends NavProps
>(
  props: T & P
): React.ReactElement<{}> => {
  const navLinks = useNav({ navigations: props.navResponse });

  const portfolioLinks = usePortfolioLinks({
    categories: props.portfolioCategoriesResponse,
  });

  return (
    <Fade duration={0.6} show>
      <PortfolioNav links={portfolioLinks} />
      <Nav links={navLinks} />
      <Component {...props} />
    </Fade>
  );
};

export default withNav;
