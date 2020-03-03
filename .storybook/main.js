const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register"
  ],
  stories: ["../src/**/stories.js", "../src/**/*.stories.js"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.join(__dirname, "..", "src")
    });
    return config;
  }
};
