window.scroll = () => {};

module.exports = {
  ...require("@testing-library/jest-dom/extend-expect"),
  ...require("whatwg-fetch"),
};
