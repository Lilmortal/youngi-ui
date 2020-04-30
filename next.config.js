const webpack = require("webpack");

const { svg } = require("./config/partials");
const { createConfig } = require("./config/util");

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.IgnorePlugin(/test.tsx$/));
    config.plugins.push(new webpack.IgnorePlugin(/stories.tsx$/));

    return createConfig(svg())(config);
  },
};
