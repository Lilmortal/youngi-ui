import cn from "./cn";

describe("combine class names", () => {
  it("should combine class names", () => {
    expect(cn("className1", "className2")).toEqual("className1 className2");
  });

  it("should combine class names with one undefined class name removed", () => {
    expect(cn("className1", undefined, "className2")).toEqual(
      "className1 className2"
    );
  });
});
