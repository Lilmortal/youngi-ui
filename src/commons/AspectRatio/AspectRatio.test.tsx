import { calculateAspectRatioFit } from "./AspectRatio";

describe("aspect ratio", () => {
  it("should get updated width with 1:1 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 20, height: 30, ratio: "1:1" })
    ).toEqual({
      width: 20,
      height: 30,
    });
  });

  it("should get updated width with 3:2 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 20, height: 30, ratio: "3:2" })
    ).toEqual({
      width: 20,
      height: 45,
    });
  });

  it("should get updated width with 4:3 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 30, height: 20, ratio: "4:3" })
    ).toEqual({
      width: 40,
      height: 20,
    });
  });

  it("should get updated width with 16:9 ratio", () => {
    expect(
      calculateAspectRatioFit({ width: 30, height: 20, ratio: "16:9" })
    ).toEqual({
      width: 53.33,
      height: 20,
    });
  });
});
