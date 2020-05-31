const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: ["@storybook/addon-knobs/register"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)(\?.*)?$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            configFile: path.join(__dirname, "./tsconfig.json"),
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });

    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              modifyVars: {
                "primary-color": "red",
                "link-color": "red",
                "border-radius-base": "2px",
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
