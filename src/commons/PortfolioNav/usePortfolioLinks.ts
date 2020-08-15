import { useContext } from "react";
import { IntlProviderContext } from "../intl/IntlProvider";
import { NextLinkProps } from "../Link";
import { PortfolioCategoryResponse } from "../../containers/Portfolio";

interface PortfolioLinksHooks {
  categories: PortfolioCategoryResponse[];
}

const usePortfolioLinks = ({
  categories,
}: PortfolioLinksHooks): NextLinkProps[] => {
  const context = useContext(IntlProviderContext);

  const links: NextLinkProps[] = [];

  categories?.map((category) =>
    links.push({
      link: {
        href: `/[lang]/[category]`,
        as: `/${context.locale}/${category.type?.toLowerCase()}`,
      },
      children: category.type || "",
    })
  );

  links.push({
    link: {
      href: `/[lang]`,
      as: `/${context.locale}`,
    },
    children: "all",
  });

  return links;
};

export default usePortfolioLinks;
