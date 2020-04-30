const webpack = require("webpack");

const {
  svg
} = require("./config/partials");
const {
  createConfig
} = require("./config/util");

module.exports = {
  webpack(config) {
    return createConfig(svg())(config);
  },
};
