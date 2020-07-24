import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { NavResponse, PortfolioCategoryResponse } from "../withNav.types";

const client = apiClient(env.cmsBaseUrl);

export const getPortfolioCategories = async (): Promise<
  PortfolioCategoryResponse[]
> =>
  await client.request<PortfolioCategoryResponse[]>({
    url: "portfolio/categories",
    method: "GET",
  });

export const getNav = async (): Promise<NavResponse[]> =>
  await client.request<NavResponse[]>({ url: "navigations", method: "GET" });
