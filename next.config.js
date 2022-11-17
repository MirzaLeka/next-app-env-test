const { loadEnvConfig } = require('@next/env')
loadEnvConfig(process.env.PWD || process.cwd())
// loadEnvConfig(".")

// eslint-disable-next-line import/no-anonymous-default-export
// export default async () => {
//   const projectDir = process.cwd()
//   loadEnvConfig(projectDir)
// }

// Next.js can read env variables from .env file without dotenv or similar lib
console.log('process.env.APP_HOME [nextjs_config] :>> ', process.env.APP_HOME);
console.log('process.env.NEWLY_ADDED_ENV_VAR [nextjs_config] :>> ', process.env.NEWLY_ADDED_ENV_VAR);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { // needs to be added in order to have env vars accessible by Client side
    APP_HOME: process.env.APP_HOME,
    NEWLY_ADDED_ENV_VAR: process.env.NEWLY_ADDED_ENV_VAR,
    GLOBAL_ENV_VAR_OS: process.env.OS,
    GLOBAL_ENV_VAR_PATH: process.env.PATH ?? process.env.Path ?? process.env.path,
  }
}

module.exports = nextConfig
