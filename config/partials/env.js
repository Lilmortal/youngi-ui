const DotEnv = require("dotenv-webpack");

const { exclude } = require("../defaults");

/**
 * @deprecated with the release of Next.js v9.4, it supports .env by default.
 * Next.js will assume you handle environment variables if you have dotenv webpack installed.
 * See (https://github.com/zeit/next.js/issues/12728).
 * Will be removed in v3.0.0
 */
const env = () => (config) => ({
  plugins: [new DotEnv({ silent: true })],
});

module.exports = env;
