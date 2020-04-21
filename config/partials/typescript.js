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
        use: ["awesome-typescript-loader"],
        exclude,
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});

module.exports = typescript;
