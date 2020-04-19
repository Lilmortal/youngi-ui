const codeSplit = () => ({
  optimization: {
    splitChunks: {
      // This is a way of telling webpack to put all node_modules files
      // into a seperate file called vendors~main.js so it be cached longer.
      chunks: "all",
    },
  },
});

module.exports = codeSplit;
