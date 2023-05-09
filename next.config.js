/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {},
  staticPageGenerationTimeout: 240,
  publicRuntimeConfig: {},
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

module.exports = nextConfig;
