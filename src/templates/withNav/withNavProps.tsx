import { GetStaticProps, GetStaticPropsContext } from "next";
import merge from "lodash.merge";
import { getPortfolioCategories } from "./api-client";
import { NavProps, PortfolioCategoryResponse } from "./withNav.types";

const withNavProps = (getStaticProps: GetStaticProps): GetStaticProps => {
  return async (
    ctx: GetStaticPropsContext
  ): Promise<{
    props: NavProps & { [key: string]: unknown };
  }> => {
    const componentStaticProps = await getStaticProps(ctx);

    let portfolioCategoriesResponse: PortfolioCategoryResponse[];

    try {
      portfolioCategoriesResponse = await getPortfolioCategories();
    } catch (e) {
      // TODO: Create an error component
      throw new Error(`Failed to load portfolios. - ${e}`);
    }
    const props = { portfolioCategoriesResponse };
    return {
      ...merge({ props }, componentStaticProps),
    };
  };
};

export default withNavProps;
