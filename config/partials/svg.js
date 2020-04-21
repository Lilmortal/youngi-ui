const { exclude } = require("../defaults");

const svg = () => (config) => ({
  module: {
    rules: [
      {
        // This is to allow SVG imports, e.g. <img src={svg} />
        // Svg-url-loader is preferred over the url-loader because
        // svg files better suited to utf8 encoding rather than base64.
        test: /\.svg$/,
        use: ["svg-url-loader"],
        exclude: [...exclude, /\.inline.svg$/],
      },
      {
        // This is to import SVG as a React component
        test: /\.inline.svg$/,
        use: ["svg-react-loader"],
        exclude,
      },
    ],
  },
});

module.exports = svg;
