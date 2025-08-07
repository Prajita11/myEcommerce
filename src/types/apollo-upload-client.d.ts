declare module 'apollo-upload-client/createUploadLink.mjs' {
  import { ApolloLink } from '@apollo/client'

  interface UploadLinkOptions {
    uri?: string
    headers?: Record<string, string>
    credentials?: 'same-origin' | 'include' | 'omit'
  }

  export default function createUploadLink(options?: UploadLinkOptions): ApolloLink
}
