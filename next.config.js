/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_URL: process.env.APP_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
}

module.exports = nextConfig