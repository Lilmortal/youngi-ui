import { calculateAspectRatioFit } from "./AspectRatio";

describe("aspect ratio", () => {
  it("should get updated width with 1:1 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 20, height: 20, ratio: "1:1" })
    ).toEqual({
      width: 20,
      height: 20,
    });
  });

  it("should get updated width with 3:2 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 20, height: 20, ratio: "3:2" })
    ).toEqual({
      width: 30,
      height: 20,
    });
  });

  it("should get updated width with 4:3 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 20, height: 20, ratio: "4:3" })
    ).toEqual({
      width: 26.67,
      height: 20,
    });
  });

  it("should get updated width with 16:9 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 20, height: 20, ratio: "16:9" })
    ).toEqual({
      width: 35.56,
      height: 20,
    });
  });
});
