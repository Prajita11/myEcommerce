import type { EnvConfig } from '@/types/env'

/**
 * Simple environment validation - throws error if required vars are missing
 */
export function validateEnv(): EnvConfig {
  const requiredVars = {
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
    VITE_APP_LONG_NAME: import.meta.env.VITE_APP_LONG_NAME,
    VITE_APP_API_URL: import.meta.env.VITE_APP_API_URL,
    VITE_APP_GRAPHQL_URL: import.meta.env.VITE_APP_GRAPHQL_URL,
    NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test',
  }

  // Check for missing required variables
  const missing = Object.entries(requiredVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}\n` + 'Please check your .env file.')
  }

  return requiredVars
}
