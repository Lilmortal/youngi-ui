import { NextRouter } from "next/router";

export const mockedRouter: NextRouter = {
  push: (): Promise<boolean> => new Promise(() => false),
  replace: (): Promise<boolean> => new Promise(() => false),
  reload: (): Promise<boolean> => new Promise(() => false),
  back: (): Promise<boolean> => new Promise(() => false),
  prefetch: (): Promise<void> => new Promise(() => undefined),
  beforePopState: (): Promise<boolean> => new Promise(() => false),
  events: {
    on: (): Promise<boolean> => new Promise(() => false),
    off: (): Promise<boolean> => new Promise(() => false),
    emit: (): Promise<boolean> => new Promise(() => false),
  },
  isFallback: false,
  query: {},
  asPath: "",
  route: "",
  pathname: "",
  basePath: "",
};
