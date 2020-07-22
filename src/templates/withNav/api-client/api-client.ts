import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { PortfolioCategoryResponse } from "../withNavProps";

const client = apiClient(env.cmsBaseUrl);

export const getPortfolioCategories = async (): Promise<
  PortfolioCategoryResponse[]
> =>
  await client.request<PortfolioCategoryResponse[]>({
    url: "portfolio/categories",
    method: "GET",
  });
