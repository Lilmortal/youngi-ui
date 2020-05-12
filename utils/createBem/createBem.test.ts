import createBem from "./createBem";

const styles = <T extends { [key: string]: string }>(
  style?: T
): { [key: string]: string } => ({
  lemon: "lemon-W213",
  "lemon--rip": "lemon--rip-W213",
  // eslint-disable-next-line @typescript-eslint/camelcase
  lemon__skin: "lemon__skin-W213",
  "lemon__skin--rip": "lemon__skin--rip-W213",
  ...style,
});

describe("createBem", () => {
  it("should return the block", () => {
    const bem = createBem(styles());

    expect(bem()).toEqual("lemon-W213");
  });

  it("should return the element", () => {
    const bem = createBem(styles());

    expect(bem("skin")).toEqual("lemon__skin-W213");
  });

  it("should return the element and the modifier", () => {
    const bem = createBem(styles());

    expect(bem("skin", "rip")).toEqual(
      "lemon__skin-W213 lemon__skin--rip-W213"
    );
  });

  it("should return the block and the modifier", () => {
    const bem = createBem(styles());

    expect(bem("", "rip")).toEqual("lemon-W213 lemon--rip-W213");
  });

  it("should conditionally return the modifier along with the block", () => {
    const bem = createBem(styles());

    expect(bem("", { rip: true })).toEqual("lemon-W213 lemon--rip-W213");
  });

  it("should not return the modifier if the condition is false", () => {
    const bem = createBem(styles());

    expect(bem("", { rip: false })).toEqual("lemon-W213");
  });

  it("should not return the modifier if the condition is undefined", () => {
    const bem = createBem(styles());

    expect(bem("", { rip: undefined })).toEqual("lemon-W213");
  });

  it("should throw an error if there are multiple blocks", () => {
    const bem = createBem(styles({ apple: "apple-W213" }));

    expect(() => bem()).toThrowError(
      "Please have a re-look at your CSS files and make sure only one block exist. All but one of these blocks [lemon, apple] must be removed."
    );
  });

  it("should throw an error if the element does not exist", () => {
    const bem = createBem(styles());

    expect(() => bem("non-existent-element")).toThrowError(
      "Attempting to create a classname failed, because [ lemon__non-existent-element ] does not exist."
    );
  });

  it("should throw an error if the modifier does not exist", () => {
    const bem = createBem(styles());

    expect(() => bem("", "non-existent-modifier")).toThrowError(
      "Attempting to create a classname failed, because [ lemon--non-existent-modifier ] does not exist."
    );
  });

  it("should throw an error if the element and modifier does not exist", () => {
    const bem = createBem(styles());

    expect(() =>
      bem("non-existent-element", "non-existent-modifier")
    ).toThrowError(
      "Attempting to create a classname failed, because [ lemon__non-existent-element ] does not exist."
    );
  });

  it("should throw an error if the conditional modifier does not exist", () => {
    const bem = createBem(styles());

    expect(() => bem("", { "non-existent-modifier": true })).toThrowError(
      "Attempting to create a classname failed, because [ lemon--non-existent-modifier ] does not exist."
    );
  });
});
