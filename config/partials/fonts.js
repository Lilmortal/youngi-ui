const { exclude } = require("../defaults");

/**
 * @deprecated Next.js and Storybook handles fonts.
 * Will be removed in v3.0.0
 */
const fonts = () => (config) => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
            },
          },
        ],
        exclude,
      },
    ],
  },
});

module.exports = fonts;
