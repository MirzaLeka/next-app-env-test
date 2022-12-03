/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { // needs to be added in order to have env vars accessible by Client side
    APP_HOME: process.env.APP_HOME,
    // NEWLY_ADDED_ENV_VAR: process.env.NEWLY_ADDED_ENV_VAR,
    // GLOBAL_ENV_VAR_OS: process.env.OS,
    // GLOBAL_ENV_VAR_PATH: process.env.PATH ?? process.env.Path ?? process.env.path,
  }
}

module.exports = nextConfig
