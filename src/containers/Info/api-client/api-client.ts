import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { InfoOwnProps } from "../Info";

const client = apiClient(env.cmsBaseUrl);

export const getInfoProps = async (): Promise<InfoOwnProps> =>
  await client.request<InfoOwnProps>({
    url: "info",
    method: "GET",
  });
