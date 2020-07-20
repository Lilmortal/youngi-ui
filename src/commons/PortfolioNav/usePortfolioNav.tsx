import React, { useContext } from "react";
import { PortfolioCategoryResponse } from "../../containers/Works";
import PortfolioNav, { PortfolioCategoriesLinks } from "./PortfolioNav";
import { IntlProviderContext } from "../intl/IntlProvider";

interface PortfolioNavHooks {
  categories: PortfolioCategoryResponse[];
}

const usePortfolioNav: React.FC<PortfolioNavHooks> = ({ categories }) => {
  const context = useContext(IntlProviderContext);

  const links: PortfolioCategoriesLinks[] = [];

  categories?.map((category) =>
    links.push({
      href: {
        href: `/[lang]/[works]`,
        as: `/${context.locale}/${category.type}`,
      },
      name: category.type,
    })
  );

  links.push({
    href: {
      href: `/[lang]`,
      as: `/${context.locale}`,
    },
    name: "all",
  });

  return <PortfolioNav links={links} />;
};

export default usePortfolioNav;
