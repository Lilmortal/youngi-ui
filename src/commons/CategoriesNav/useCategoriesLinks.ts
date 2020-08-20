import { useContext } from "react";
import { IntlProviderContext } from "../intl/IntlProvider";
import { NextLinkProps } from "../Link";
import { PortfolioCategoryResponse } from "../../containers/Portfolio";
import { useRouter } from "next/router";

interface CategoriesLinksHooks {
  categories: PortfolioCategoryResponse[];
}

const useCategoriesLinks = ({
  categories,
}: CategoriesLinksHooks): NextLinkProps[] => {
  const router = useRouter();
  const context = useContext(IntlProviderContext);

  const links: NextLinkProps[] = [];

  const categoriesHref = `/[lang]/[category]`;

  categories?.forEach((category) =>
    links.push({
      link: {
        href: categoriesHref,
        as: `/${context.locale}/${category.type?.toLowerCase()}`,
      },
      selected:
        router.pathname === categoriesHref &&
        router.query?.category === category.type?.toLowerCase(),
      children: category.type || "",
    })
  );

  const href = `/[lang]`;
  links.push({
    link: {
      href,
      as: `/${context.locale}`,
    },
    selected: router.pathname === href && router.query?.category === undefined,
    children: "all",
  });

  return links;
};

export default useCategoriesLinks;
