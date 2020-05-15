import React from "react";

// TODO: Keep this for localization in the future
export interface AppConfigContextData {
  readonly useMockData: boolean;
}

const appConfig: AppConfigContextData = {
  useMockData: !!process.env.USE_MOCKDATA,
};

const AppConfigContext = React.createContext<AppConfigContextData>(appConfig);

export default AppConfigContext;
