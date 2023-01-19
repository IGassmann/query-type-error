const withRoutes = require("nextjs-routes/config")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withRoutes(nextConfig);
