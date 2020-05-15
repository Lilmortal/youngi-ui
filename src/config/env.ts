export interface EnvironmentConfig {
  readonly useMockData: boolean;
  readonly cmsBaseUrl: string;
}

const env: EnvironmentConfig = {
  useMockData: !process.env.CMS_BASE_URL,
  cmsBaseUrl: process.env.CMS_BASE_URL || "http://localhost:1337",
};

export default env;
