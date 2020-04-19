const { exclude } = require("../defaults");

const typescript = () => ({
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
});

module.exports = typescript;
