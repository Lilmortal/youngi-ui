const webpack = require("webpack");

const { env, svg } = require("./config/partials");
const { createConfig } = require("./config/util");

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

/**
 * Copied this from https://github.com/zeit/next.js/issues/11629.
 * Convert CSS Modules mode from pure to local to allow exporting CSS variables.
 * 
 * @param {object} config 
 */
const convertCssModulesModeToLocal = (config) => {
  const oneOf = config.module.rules.find(
    (rule) => typeof rule.oneOf === "object"
  );

  if (oneOf) {
    const moduleSassRule = oneOf.oneOf.find((rule) =>
      regexEqual(rule.test, /\.module\.(scss|sass)$/)
    );

    if (moduleSassRule) {
      const cssLoader = moduleSassRule.use.find(({ loader }) =>
        loader.includes("css-loader")
      );
      if (cssLoader) {
        // Use the default CSS modules mode. Next.js use 'pure'. Not sure of all implications
        cssLoader.options.modules.mode = "local";
      }
    }
  }

  return config;
};

module.exports = {
  webpack(config) {
    config = convertCssModulesModeToLocal(config);

    return createConfig(env(), svg())(config);
  },
  distDir: "build",
};
