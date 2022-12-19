import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: true,
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    return event
  },
  tracesSampleRate: 0.25,
})