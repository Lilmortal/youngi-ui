import { useContext } from "react";
import { LinkProps } from "../Link";
import { NavResponse } from "../../templates/withNav";
import { IntlProviderContext } from "../intl/IntlProvider";

interface NavHooks {
  navigations: NavResponse[];
}

const useNav = ({ navigations }: NavHooks): LinkProps[] => {
  const context = useContext(IntlProviderContext);
  const links: LinkProps[] = [];

  navigations?.map((navigation) =>
    links.push({
      link: {
        href: `/[lang]/[${navigation.url}]`,
        as: `/${context.locale}/${navigation.url}`,
      },
      name: navigation.name,
    })
  );

  return links;
};

export default useNav;
