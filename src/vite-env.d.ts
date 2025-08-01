/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_LONG_NAME: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_GRAPHQL_URL: string
  readonly NODE_ENV: `development` | `production` | `test`
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
