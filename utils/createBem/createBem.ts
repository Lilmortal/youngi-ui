interface BemModifierMap {
  [key: string]: boolean | undefined;
}

const getBlock = <T extends { [key: string]: string }>(styles: T): string => {
  const uniqueBlocks = new Set<string>();

  Object.keys(styles).forEach((key) => {
    const elementValue = Math.max(0, key.indexOf("__"));
    const modifierValue = Math.max(0, key.indexOf("--"));

    const endBlock = elementValue || modifierValue || key.length;

    const block = key.substring(0, endBlock);

    if (block.startsWith("global-")) {
      if (!styles[block]) {
        throw new Error(
          `failed to export CSS variable [ ${block.substring(
            7,
            block.length
          )} ], did you named it correctly?`
        );
      }
    } else if (!block.startsWith("animation-")) {
      uniqueBlocks.add(block);
    }
  });

  const blocks = Array.from(uniqueBlocks);

  if (blocks.length > 1) {
    throw new Error(
      `Please have a re-look at your CSS files and make sure only one block exist. 
      All but one of these blocks [${blocks.join(
        ", "
      )}] must be removed. If you are 
      attempting to export CSS variables, they must start with "global-". e.g. { global-variable: 4; }.
      
      If you want to add a keyframe, it must start with "animation-". e.g. @keyframes animation-variable.`
    );
  }

  return blocks[0];
};

const bem = <T extends { [key: string]: string }>(styles: T) => (
  element: string | undefined = "",
  modifier?: string | BemModifierMap
): string => {
  const block = getBlock(styles);

  const classes: string[] = [];
  if (element) {
    if (styles[`${block}__${element}`]) {
      classes.push(`${block}__${element}`);
    } else {
      throw new Error(
        `Attempting to create a classname failed, because [ ${block}__${element} ] does not exist.`
      );
    }
  } else {
    classes.push(block);
  }

  const className = classes[0];
  if (!!modifier && typeof modifier === "string") {
    if (styles[`${className}--${modifier}`]) {
      classes.push(`${className}--${modifier}`);
    } else {
      throw new Error(
        `Attempting to create a classname failed, because [ ${className}--${modifier} ] does not exist.`
      );
    }
  } else if (typeof modifier === "object") {
    Object.entries(modifier).forEach(([key, value]) => {
      if (value) {
        if (styles[`${className}--${key}`]) {
          classes.push(`${className}--${key}`);
        } else {
          throw new Error(
            `Attempting to create a classname failed, because [ ${className}--${key} ] does not exist.`
          );
        }
      }
    });
  }

  return classes.map((name) => styles[name]).join(" ");
};

export default bem;
