const path = require("path");

module.exports = {
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register"
  ],
  stories: ["../stories/*.stories.tsx"],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.join(__dirname, "..", "src")
      },
      {
        test: /\.tsx$/,
        use: ["react-docgen-typescript-loader"]
      }
    );
    return config;
  }
};
