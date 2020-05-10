const webpack = require("webpack");

const { env, svg, css } = require("./config/partials");
const { createConfig } = require("./config/util");

module.exports = {
  webpack(config) {
    return createConfig(env(), svg(), css())(config);
  },
};
