import cn from "./cn";

describe("combine class names", () => {
  it("should combine class names", () => {
    expect(cn("className1", "className2")).toEqual("className1 className2");
  });
});
