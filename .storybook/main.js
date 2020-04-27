const { createConfig } = require("../config/util");
const { css, svg, typescript } = require("../config/partials");

const getStorybookSvgLoader = (config) =>
  config.module.rules.find(
    (rule) =>
      rule.test &&
      rule.test.toString().includes("svg") &&
      rule.loader &&
      rule.loader.includes("file-loader")
  );

module.exports = {
  stories: ["../pages/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    /**
     * Storybook sets all SVG loaders to be file-loaders, but in our case we cater
     * to both inline and file, hence we import our own instead.
     */
    let rule = getStorybookSvgLoader(config);
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    console.log(config);
    return createConfig(css(), svg(), typescript())(config);
  },
};
