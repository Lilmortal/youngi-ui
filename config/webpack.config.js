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
  svg,
  typescript,
} = require("./partials");

const publicPath = "public";
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
  html({ title, description, template: path.resolve(publicPath, "index.ejs") }),
  svg(),
  typescript()
)({
  devtool:
    getDefaultMode() === "production" ? "source-map" : "inline-source-map",
  mode: getDefaultMode(),
  entry: {
    app: path.resolve(srcPath, "index.tsx"),
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

module.exports = config;
