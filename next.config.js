const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
    localeDetection: false,
  },
  publicRuntimeConfig: {
    ENV: process.env.ENV,
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    VERSION: process.env.VERSION,
  },
  output: "standalone",
};
