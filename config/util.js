const merge = require("webpack-merge");

const createConfig = (...configs) => (defaultConfig) =>
  configs.reduce(
    (mergedConfig, config) => merge(mergedConfig, config(mergedConfig)),
    defaultConfig
  );

module.exports = { createConfig };
