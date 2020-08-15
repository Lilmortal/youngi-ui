import { useContext } from "react";
import { NextLinkProps } from "../Link";
import { NavResponse } from "../../templates/withNav";
import { IntlProviderContext } from "../intl/IntlProvider";

interface NavHooks {
  navigations: NavResponse[];
}

const useNav = ({ navigations }: NavHooks): NextLinkProps[] => {
  const context = useContext(IntlProviderContext);
  const links: NextLinkProps[] = [];

  navigations?.map((navigation) =>
    links.push({
      link: {
        href: `/[lang]/[${navigation.url}]`,
        as: `/${context.locale}/${navigation.url}`,
      },
      children: navigation.name,
    })
  );

  return links;
};

export default useNav;
