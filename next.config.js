import { loadEnvConfig } from '@next/env'

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}

// Next.js can read env variables from .env file without dotenv or similar lib
console.log('process.env.APP_HOME [nextjs_config] :>> ', process.env.APP_HOME);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { // needs to be added in order to have env vars accessible by Client side
    APP_HOME: process.env.APP_HOME,
    NEWLY_ADDED_ENV_VAR: process.env.NEWLY_ADDED_ENV_VAR,
    NODE_ENV: process.env.NODE_ENV,
    GLOBAL_ENV_VAR_OS: process.env.OS,
    GLOBAL_ENV_VAR_PATH: process.env.PATH ?? process.env.Path ?? process.env.path,
  }
}

module.exports = nextConfig
