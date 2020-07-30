import { defaultPaths } from "./config";

it("should return just the locales", () => {
  const paths = defaultPaths();

  expect(paths).toEqual([
    { params: { lang: "en" } },
    { params: { lang: "ko" } },
  ]);
});

it("should return params with appended locales", () => {
  const paths = defaultPaths([{ works: "design" }, { works: "photography" }]);

  expect(paths).toEqual([
    { params: { lang: "en", works: "design" } },
    { params: { lang: "en", works: "photography" } },
    { params: { lang: "ko", works: "design" } },
    { params: { lang: "ko", works: "photography" } },
  ]);
});
