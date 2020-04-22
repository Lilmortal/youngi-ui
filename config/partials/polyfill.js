const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const polyfill = () => (config) => ({
  plugins: [
    new CopyPlugin([
      {
        from: "/polyfills",
        to: "/build",
        toType: "file",
      },
    ]),
    new HtmlWebpackTagsPlugin({ tags: ["polyfill.js"], append: true }),
  ],
});

module.exports = polyfill;
