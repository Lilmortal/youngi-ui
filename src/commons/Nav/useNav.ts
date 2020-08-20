import { useContext } from "react";
import { NextLinkProps } from "../Link";
import { NavResponse } from "../../templates/withNav";
import { IntlProviderContext } from "../intl/IntlProvider";
import { useRouter } from "next/router";

interface NavHooks {
  navigations: NavResponse[];
}

const useNav = ({ navigations }: NavHooks): NextLinkProps[] => {
  const router = useRouter();
  const context = useContext(IntlProviderContext);
  const links: NextLinkProps[] = [];

  navigations?.forEach((navigation) =>
    links.push({
      link: {
        href: `/[lang]/[${navigation.url}]`,
        as: `/${context.locale}/${navigation.url}`,
      },
      selected: router.pathname === `/[lang]/${navigation.url}`,
      children: navigation.name,
    })
  );

  return links;
};

export default useNav;
