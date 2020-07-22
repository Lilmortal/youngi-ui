import React from "react";
import PortfolioNav, { usePortfolioLinks } from "../../commons/PortfolioNav";
import { NavProps } from "./withNav.types";
import Nav from "../../commons/Nav";

const withNav = <T extends object>(Component: React.FC<T>) => <
  P extends NavProps
>(
  props: T & P
): React.ReactElement<{}> => {
  const portfolioLinks = usePortfolioLinks({
    categories: props.portfolioCategoriesResponse,
  });

  return (
    <>
      <PortfolioNav links={portfolioLinks} />
      <Nav links={portfolioLinks} />
      <Component {...props} />
    </>
  );
};

export default withNav;
