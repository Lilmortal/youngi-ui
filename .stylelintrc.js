module.exports = {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
