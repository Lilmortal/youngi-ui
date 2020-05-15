/**
 * @deprecated Next.js code split our code by default.
 * Will be removed in v3.0.0
 */
const codeSplit = () => (config) => ({
  optimization: {
    splitChunks: {
      // This is a way of telling webpack to put all node_modules files
      // into a seperate file called vendors~main.js so it be cached longer.
      chunks: "all",
    },
  },
});

module.exports = codeSplit;
