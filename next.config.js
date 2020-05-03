const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");

module.exports = withLess(
  withSass({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "primary-color": "red",
          "link-color": "red",
          "border-radius-base": "2px",
        },
        javascriptEnabled: true,
      },
    },
  })
);
