const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require("autoprefixer");

const { exclude } = require("../defaults");

const css = () => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // Extract css to a seperate main.css file in production, in <script> tag on dev.
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
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
  // if prod
  //   plugins: [
  //     // Some libraries like React use process.env.NODE_ENV internally, it's best to put this here.
  //     new webpack.DefinePlugin({
  //       'process.env.NODE_ENV': JSON.stringify('production'),
  //     }),
  //     // To make sure vendor cache does not change, this plugin will hash the relative path of the module
  //     // instead of using module.id.
  //     new webpack.HashedModuleIdsPlugin(),
  //     // Extract css files into a seperate bundle
  //     new MiniCssExtractPlugin({
  //       filename: '[name].[contenthash].bundle.css',
  //       chunkFilename: '[id].[contenthash].bundle.css',
  //     }),
  //     // This sets the global variables
  //     new webpack.DefinePlugin({
  //       __DEV__: false,
  //     }),
  //   ],
  //   optimization: {
  //     minimizer: [
  //       // Currently webpack v4 does not have CSS minimizer built in, so this plugin will do.
  //       // It can be removed when webpack v5 is out.
  //       new OptimizeCSSAssetsPlugin(),
  //     ],
  //     splitChunks: {
  //       cacheGroups: {
  //         styles: {
  //           name: 'styles',
  //           test: /\.css$/,
  //           chunks: 'all',
  //           enforce: true,
  //         },
  //       },
  //     },
  //   },
});

module.exports = css;
