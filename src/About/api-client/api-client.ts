import apiClient from "../../../utils/apiClient";
import env from "../../config/env";
import { AboutOwnProps } from "../About";

const client = apiClient(env.cmsBaseUrl);

export const getAboutProps = async (): Promise<AboutOwnProps> =>
  await client.request<AboutOwnProps>({
    url: "about",
    method: "GET",
  });
