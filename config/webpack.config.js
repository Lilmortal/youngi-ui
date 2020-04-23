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
const vendorPath = "vendor";
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
    polyfill: path.resolve(vendorPath, "polyfill/src/polyfill.ts"),
    app: path.resolve(srcPath, "index.tsx"),
  },
  output: {
    filename: `[name].${getDefaultMode() === 'production' ? '[chunkhash]' : '[hash]'}.bundle.js`,
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
