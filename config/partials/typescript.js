const TerserPlugin = require("terser-webpack-plugin");

const {
  exclude
} = require("../defaults");

const typescript = ({
  useBabelRc = false
} = {}) => (config) => ({
  resolve: {
    // If multiple files with the same name exists in the same directory, pick
    // the extensions first in the order of the array.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: [{
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: useBabelRc,
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: {
                    version: 3,
                    proposals: true
                  },
                  targets: {
                    ie: 11,
                    node: "current",
                  },
                },
              ],
            ],
          },
          babelCore: "@babel/core",
        },
      }, ],
      exclude,
    }, ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});

module.exports = typescript;