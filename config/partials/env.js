const DotEnv = require("dotenv-webpack");

const { exclude } = require("../defaults");

const env = () => (config) => ({
  plugins: [new DotEnv({ silent: true })],
});

module.exports = env;
