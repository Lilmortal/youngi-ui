const DotEnv = require("dotenv-webpack");

const { exclude } = require("../defaults");

/**
 * @deprecated with the release of Next.js v9.4, it supports .env by default.
 */
const env = () => (config) => ({
  plugins: [new DotEnv({ silent: true })],
});

module.exports = env;
