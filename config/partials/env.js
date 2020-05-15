const DotEnv = require("dotenv-webpack");

const { exclude } = require("../defaults");

/**
 * @deprecated with the release of Next.js v9.4, it supports .env by default.
 * Will be removed in v3.0.0
 */
const env = () => (config) => ({
  plugins: [new DotEnv({ silent: true })],
});

module.exports = env;
