import createBem from "./createBem";

const styles = (style = {}): object => ({
  lemon: {},
  "lemon--rip": {},
  // eslint-disable-next-line @typescript-eslint/camelcase
  lemon__skin: {},
  "lemon__skin--rip": {},
  ...style,
});

describe("createBem", () => {
  it("should return the block", () => {
    const bem = createBem(styles());

    expect(bem()).toEqual("lemon");
  });

  it("should return the block and the element", () => {
    const bem = createBem(styles());

    expect(bem("skin")).toEqual("lemon__skin");
  });

  it("should return the block, element, and the modifier", () => {
    const bem = createBem(styles());

    expect(bem("skin", "rip")).toEqual("lemon__skin lemon__skin--rip");
  });

  it("should return the block and the modifier", () => {
    const bem = createBem(styles());

    expect(bem("", "rip")).toEqual("lemon lemon--rip");
  });

  it("should conditionally return the modifier along with the block", () => {
    const bem = createBem(styles());

    expect(bem("", { rip: true })).toEqual("lemon lemon--rip");
  });

  it("should not return the modifier if the condition is false", () => {
    const bem = createBem(styles());

    expect(bem("", { rip: false })).toEqual("lemon");
  });

  it("should not return the modifier if the condition is undefined", () => {
    const bem = createBem(styles());

    expect(bem("", { rip: undefined })).toEqual("lemon");
  });

  it("should throw an error if there are multiple blocks", () => {
    const bem = createBem(styles({ apple: { color: "white" } }));

    expect(() => bem()).toThrowError(
      "Please have a re-look at your CSS files and make sure only one block exist. All but one of these blocks [lemon, apple] must be removed."
    );
  });

  it("should throw an error if the element does not exist", () => {
    const bem = createBem(styles());

    expect(() => bem("non-existent-element")).toThrowError(
      "Attempting to create a classname failed. It could be because your BEM element [non-existent-element] does not exist."
    );
  });

  it("should throw an error if the modifier does not exist", () => {
    const bem = createBem(styles());

    expect(() => bem("", "non-existent-modifier")).toThrowError(
      "Attempting to create a classname failed. It could be because your BEM modifier [non-existent-modifier] does not exist."
    );
  });

  it("should throw an error if the element and modifier does not exist", () => {
    const bem = createBem(styles());

    expect(() =>
      bem("non-existent-element", "non-existent-modifier")
    ).toThrowError(
      "Attempting to create a classname failed. It could be because your BEM element [non-existent-element] or modifier [non-existent-modifier] does not exist."
    );
  });
});
