import React from "react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { mockedRouter } from "./mock-data/data";
import { NextRouter } from "next/router";

export interface MockRouterProps {
  value?: Partial<NextRouter>;
  children: React.ReactNode;
}

const MockRouter: React.FC<MockRouterProps> = ({ value, children }) => (
  <RouterContext.Provider value={{ ...mockedRouter, ...value }}>
    {children}
  </RouterContext.Provider>
);

export default MockRouter;
