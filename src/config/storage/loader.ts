export type hasSeenLoaderType = "true" | "false";

export const setHasSeenLoaderStorage = (
  hasSeenLoader: hasSeenLoaderType
): void => sessionStorage.setItem("hasSeenLoader", hasSeenLoader);

export const getHasSeenHeaderStorage = (): string | null =>
  sessionStorage.getItem("hasSeenLoader");
