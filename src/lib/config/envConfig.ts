import { validateEnv } from '@/lib/validators/env.validator'

// Validate and get environment variables
const env = validateEnv()

// Export validated environment variables
export const APP_NAME = env.VITE_APP_NAME
export const APP_LONG_NAME = env.VITE_APP_LONG_NAME
export const API_URL = env.VITE_APP_API_URL
export const APP_ENV = env.NODE_ENV
