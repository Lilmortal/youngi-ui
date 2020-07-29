import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { PortfolioImageResponse, WorksResponse } from "../Works.types";

const client = apiClient(env.cmsBaseUrl);

export const getWorksResponse = async (): Promise<WorksResponse> =>
  await client.request<WorksResponse>({ url: "work", method: "GET" });

export const getPortfolioImages = async (): Promise<PortfolioImageResponse[]> =>
  await client.request<PortfolioImageResponse[]>({
    url: "portfolio/images",
    method: "GET",
  });
