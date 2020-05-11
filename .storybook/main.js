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
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register",
  ],
  stories: ["../components/**/*.stories.tsx", "../src/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    /**
     * Storybook sets all SVG loaders to be file-loaders, but in our case we cater
     * to both inline and file, hence we import our own instead.
     */
    let rule = getStorybookSvgLoader(config);
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    return createConfig(css(), svg(), typescript())(config);
  },
};
