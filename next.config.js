const path = require("path");
const config = require("./data/config.json");

const basePath =
  config.basePath && config.basePath !== "/" ? config.basePath : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname, "src"),
    };
    return config;
  },
};

module.exports = nextConfig;
