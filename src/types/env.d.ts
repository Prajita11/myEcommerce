// Simple environment variable types
export interface EnvConfig {
  VITE_APP_NAME: string
  VITE_APP_LONG_NAME: string
  VITE_APP_API_URL: string
  VITE_APP_GRAPHQL_URL: string
  NODE_ENV: 'development' | 'production' | 'test'
}
