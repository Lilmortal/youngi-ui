export interface EnvironmentConfig {
  readonly cmsBaseUrl: string;
}

const env: EnvironmentConfig = {
  cmsBaseUrl: process.env.CMS_BASE_URL || "http://localhost:1337",
};

export default env;
