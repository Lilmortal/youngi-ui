import { GetStaticProps, GetStaticPropsContext } from "next";
import merge from "lodash.merge";
import { getPortfolioCategories, getNav } from "./api-client";
import {
  NavProps,
  PortfolioCategoryResponse,
  NavResponse,
} from "./withNav.types";

const withNavProps = (getStaticProps: GetStaticProps): GetStaticProps => async (
  ctx: GetStaticPropsContext
): Promise<{
  props: NavProps & { [key: string]: unknown };
}> => {
  const componentStaticProps = await getStaticProps(ctx);

  let portfolioCategoriesResponse: PortfolioCategoryResponse[];
  let navResponse: NavResponse[];

  try {
    portfolioCategoriesResponse = await getPortfolioCategories();
    navResponse = await getNav();
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }
  const props = { portfolioCategoriesResponse, navResponse };
  return {
    ...merge({ props }, componentStaticProps),
  };
};

export default withNavProps;
