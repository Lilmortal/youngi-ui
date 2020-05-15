import { HomeOwnProps } from "../Home";
import apiClient from "../../../utils/apiClient";
import env from "../../config/env";

const client = apiClient(env.cmsBaseUrl);

export const getHomeData = async (): Promise<HomeOwnProps> =>
  await client.request<HomeOwnProps>({
    url: "home",
    method: "GET",
  });
