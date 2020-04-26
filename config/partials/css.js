const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require("autoprefixer");
const merge = require("webpack-merge");

const { exclude } = require("../defaults");

const css = () => (config) => {
  const scssConfig = {
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            // Extract css to a seperate file in production, in <script> tag on dev.
            // config.mode === "production"
            // ? MiniCssExtractPlugin.loader
            // : "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            "sass-loader",
          ],
          exclude,
        },
      ],
    },
  };

  return config.mode === "production"
    ? merge(scssConfig, {
        plugins: [
          // Extract css files into a seperate bundle
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].bundle.css",
            chunkFilename: "[id].[contenthash].bundle.css",
          }),
        ],
        optimization: {
          minimizer: [
            // Currently webpack v4 does not have CSS minimizer built in, so this plugin will do.
            // It can be removed when webpack v5 is out.
            new OptimizeCSSAssetsPlugin(),
          ],
          splitChunks: {
            cacheGroups: {
              styles: {
                name: "styles",
                test: /\.css$/,
                chunks: "all",
                enforce: true,
              },
            },
          },
        },
      })
    : scssConfig;
};

module.exports = css;
