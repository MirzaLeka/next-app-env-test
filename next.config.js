const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { // needs to be added in order to have env vars accessible by Client side
    APP_HOME: process.env.APP_HOME,
    sentryDsn: process.env.SENTRY_DSN,
    sentryEnable: true,
    // NEWLY_ADDED_ENV_VAR: process.env.NEWLY_ADDED_ENV_VAR,
    // GLOBAL_ENV_VAR_OS: process.env.OS,
    // GLOBAL_ENV_VAR_PATH: process.env.PATH ?? process.env.Path ?? process.env.path,
  }
}

const sentryWebpackPluginOptions = {
  silent: true,
  dryRun: process.env.NODE_ENV === 'development',
  errorHandler: (err, invokeErr, compilation) => {
    if (err.message.includes('sentry reported an error')) {
      // If Sentry has an incident, we don't want builds to fail.
      // @ts-ignore
      compilation.warnings.push(`Sentry CLI Plugin: ${err.message}`)
    } else {
      invokeErr()
    }
  },
}

module.exports =
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
