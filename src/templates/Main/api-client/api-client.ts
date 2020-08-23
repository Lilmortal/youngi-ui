import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { NavResponse, ContactResponse } from "../Main.types";
import { PortfolioCategoryResponse } from "../../../containers/Portfolio";

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

export const getContacts = async (): Promise<ContactResponse[]> =>
  await client.request<ContactResponse[]>({
    url: "contacts",
    method: "GET",
  });
