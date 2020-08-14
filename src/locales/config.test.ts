import { defaultPaths } from "./config";

it("should return just the locales", () => {
  const paths = defaultPaths();

  expect(paths).toEqual([
    { params: { lang: "en" } },
    { params: { lang: "ko" } },
  ]);
});

it("should return params with appended locales", () => {
  const paths = defaultPaths([
    { category: "design" },
    { category: "photography" },
  ]);

  expect(paths).toEqual([
    { params: { lang: "en", category: "design" } },
    { params: { lang: "en", category: "photography" } },
    { params: { lang: "ko", category: "design" } },
    { params: { lang: "ko", category: "photography" } },
  ]);
});
