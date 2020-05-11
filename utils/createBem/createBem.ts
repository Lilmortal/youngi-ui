interface BemModifierMap {
  [key: string]: boolean | undefined;
}

interface BemMap {
  block: string;
  element?: string;
  modifier?: string;
  value: string;
}

const hasDuplicateBlocks = (bemMap: BemMap[]): string[] => {
  const uniqueSets = new Set<string>();
  // TODO: Jest does not support optional chaining even though we target esnext, look into it.
  if (bemMap.length) {
    uniqueSets.add(bemMap[0].block);
  }

  Object.values(bemMap).some(
    (bem) => uniqueSets.size !== uniqueSets.add(bem.block).size
  );

  return Array.from(uniqueSets);
};

const bem = <T extends object>(styles: T) => (
  element?: string,
  modifier?: string | BemModifierMap
): string => {
  element = element || undefined;
  modifier = modifier || undefined;

  const bemResults: BemMap[] = [];

  Object.keys(styles).forEach((key) => {
    const elementValue = Math.max(0, key.indexOf("__"));
    const modifierValue = Math.max(0, key.indexOf("--"));

    const endBlock = elementValue || modifierValue || key.length;

    const block = key.substring(0, endBlock);

    const bemMap: BemMap = { block, value: key };
    if (elementValue) {
      bemMap.element = key.substring(
        elementValue + 2,
        modifierValue || key.length
      );
    }

    if (modifierValue) {
      bemMap.modifier = key.substring(modifierValue + 2, key.length);

      bemMap.value = key.substring(0, modifierValue) + " " + bemMap.value;
    }

    bemResults.push(bemMap);
  });

  const blocks = hasDuplicateBlocks(bemResults);
  if (blocks.length > 1) {
    throw `Please have a re-look at your CSS files and make sure only one block exist. All but one of these blocks [${blocks.join(
      ", "
    )}] must be removed.`;
  }

  const result = bemResults.filter((result) => {
    if (typeof modifier === "object") {
      return Object.entries(modifier).find(([key, value]) => {
        if (value) {
          return result.element === element && result.modifier === key;
        }
        return result.element === element && result.modifier === undefined;
      });
    }

    return result.element === element && result.modifier === modifier;
  });

  if (!result.length) {
    throw `Attempting to create a classname failed. It could be because your BEM ${
      element ? `element [${element}]` : ""
    }${element && modifier ? " or " : ""}${
      modifier ? `modifier [${modifier}]` : ""
    } does not exist.`;
  }

  return result.map((r) => r.value).join(" ");
};

export default bem;
