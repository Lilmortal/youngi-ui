import { GetStaticProps, GetStaticPropsContext } from "next";
import merge from "lodash.merge";
import { getPortfolioCategories, getNav, getContacts } from "./api-client";
import { NavProps, NavResponse, ContactResponse } from "./withNav.types";
import { PortfolioCategoryResponse } from "../../containers/Portfolio";

const withNavProps = (getStaticProps: GetStaticProps): GetStaticProps => async (
  ctx: GetStaticPropsContext
): Promise<{
  props: NavProps & { [key: string]: unknown };
}> => {
  const componentStaticProps = await getStaticProps(ctx);

  let portfolioCategoriesResponse: PortfolioCategoryResponse[];
  let navResponse: NavResponse[];
  let contactResponse: ContactResponse[];

  try {
    portfolioCategoriesResponse = await getPortfolioCategories();
    navResponse = await getNav();
    contactResponse = await getContacts();
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }
  const props = { portfolioCategoriesResponse, navResponse, contactResponse };
  return {
    ...merge({ props }, componentStaticProps),
  };
};

export default withNavProps;
