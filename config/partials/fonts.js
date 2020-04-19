const { exclude } = require("../defaults");

const fonts = () => ({
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
