const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.devtool = "source-map"; // Corrected the placement of this line
    config.plugins.push(
      new NextFederationPlugin({
        name: "remoteApp",
        filename: "static/chunks/remoteEntry.js",
        extraOptions: {
          exposePages: true,
        },
        shared: {
            singleton: true,
            strictVersion: true,
            requiredVersion: "auto",
          
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
