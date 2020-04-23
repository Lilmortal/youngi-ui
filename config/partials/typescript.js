const TerserPlugin = require("terser-webpack-plugin");

const { exclude } = require("../defaults");

const typescript = () => (config) => ({
  resolve: {
    // If multiple files with the same name exists in the same directory, pick
    // the extensions first in the order of the array.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              useBabel: true,
              babelOptions: {
                babelrc: false,
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: "last 2 versions, ie 11",
                      modules: false,
                    },
                  ],
                ],
              },
              babelCore: "@babel/core",
            },
          },
        ],
        exclude,
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});

module.exports = typescript;
