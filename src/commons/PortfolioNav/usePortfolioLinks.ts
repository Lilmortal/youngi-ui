import { useContext } from "react";
import { IntlProviderContext } from "../intl/IntlProvider";
import { LinkProps } from "../Link";
import { PortfolioCategoryResponse } from "../../containers/Works";

interface PortfolioLinksHooks {
  categories: PortfolioCategoryResponse[];
}

const usePortfolioLinks = ({
  categories,
}: PortfolioLinksHooks): LinkProps[] => {
  const context = useContext(IntlProviderContext);

  const links: LinkProps[] = [];

  categories?.map((category) =>
    links.push({
      link: {
        href: `/[lang]/[works]`,
        as: `/${context.locale}/${category.type?.toLowerCase()}`,
      },
      name: category.type || "",
    })
  );

  links.push({
    link: {
      href: `/[lang]`,
      as: `/${context.locale}`,
    },
    name: "all",
  });

  return links;
};

export default usePortfolioLinks;
