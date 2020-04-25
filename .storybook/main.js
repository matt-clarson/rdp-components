const path = require("path");

const TS_CONFIG = path.resolve(__dirname, "..", "tsconfig.stories.json");

module.exports = {
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register"
  ],
  stories: ["../stories/*.stories.tsx"],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.join(__dirname, "..", "styles")
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              configFile: TS_CONFIG
            }
          },
          // Optional
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              tsconfigPath: TS_CONFIG,
              propFilter: prop => {
                if (prop.parent) {
                  return !prop.parent.fileName.includes("node_modules");
                }

                return true;
              }
            }
          }
        ]
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
