const path = require("path");
const webpack = require("webpack");
const chalk = require("chalk");

const { createConfig } = require("./util");

const {
  cleanDir,
  codeSplit,
  css,
  file,
  fonts,
  html,
  i18n,
  polyfill,
  svg,
  typescript,
} = require("./partials");

const srcPath = "src";
const outputPath = "build";

const title = "Youngi Blog";
const description = "Showcasing Youngi's photographs";

const getDefaultMode = () =>
  process.env.NODE_ENV === "production" ? "production" : "development";

console.log(chalk.yellow(`You are currently in ${getDefaultMode()}.`));

const config = createConfig(
  cleanDir(),
  codeSplit(),
  css(),
  file(),
  fonts(),
  html({ title, description }),
  svg(),
  typescript(),
)({
  context: path.resolve(srcPath),
  devtool:
    getDefaultMode() === "production" ? "source-map" : "inline-source-map",
  mode: getDefaultMode(),
  entry: {
    app: "./index.tsx",
  },
  // We can't use [chunkhash] in dev mode is because it is not compatible with webpack-dev-server,
  // as well as severely increases build time in dev.
  // The differences between [hash] and [chunkhash] is [hash] is calculated for a build, whereas
  // [chunkhash] is calculated for each chunks.
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(outputPath),
  },
  plugins: [
    // This sets the global variables
    new webpack.DefinePlugin({
      __DEV__: getDefaultMode() === "development",
    }),
  ],
});

console.log(config);
module.exports = config;
