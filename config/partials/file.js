const { exclude } = require("../defaults");

/**
 * @deprecated Storybook handles image files by default. Next.js handles it via finding
 * the files on /public.
 * Will be removed in v3.0.0
 */
const file = () => (config) => ({
  module: {
    rules: [
      {
        // Base64 all related files to reduce network requests, falling back to
        // file-loader after the limit size has been reached.
        // File-loader is used to copy the files to the build folder and provide links
        // to them.
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
        exclude,
      },
    ],
  },
});

module.exports = file;
