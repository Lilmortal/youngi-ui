const cn = (...classNames: (string | undefined)[]): string =>
  classNames.filter((className) => !!className).join(" ");

export default cn;
