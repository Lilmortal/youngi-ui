const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const cleanDir = () => ({
  plugins: [
    // Sometimes our /dist folder might have unused files. This plugin deletes the folder before we start building
    // our bundles.
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["dist"] }),
  ],
});

module.exports = cleanDir;
