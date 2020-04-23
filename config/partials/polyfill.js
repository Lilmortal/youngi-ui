const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const findUp = require("find-up");

const getPolyfillDir = () =>
  findUp.sync((dir) => path.join(dir, "polyfill/src/polyfill.ts"));

const getBuildDir = () => findUp.sync((dir) => path.join(dir, "build"));

const polyfill = () => (config) => {
  return {
    plugins: [
      new CopyPlugin([
        {
          from: getPolyfillDir(),
          to: getBuildDir(),
          toType: "dir",
        },
      ]),
      new HtmlWebpackTagsPlugin({
        tags: ["polyfill.js"],
        append: false,
        useHash: true,
      }),
    ],
  };
};

module.exports = polyfill;
