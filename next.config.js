// Next.js can read env variables from .env file without dotenv or similar lib
console.log('process.env.APP_HOME [nextjs_config] :>> ', process.env.APP_HOME);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { // needs to be put here in order to be accessible by Client side
    APP_HOME: process.env.APP_HOME
  }
}

module.exports = nextConfig
