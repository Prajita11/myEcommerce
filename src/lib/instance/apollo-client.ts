// src/apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';


const fileLink = createUploadLink({
  uri: import.meta.env.VITE_APP_GRAPHQL_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-apollo-operation-name': 'YourOperationName',
    'apollo-require-preflight': 'true',
  },
}) as unknown as ApolloLink

export const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_GRAPHQL_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-apollo-operation-name': 'YourOperationName',
    'apollo-require-preflight': 'true',
  },
})

const authLink = setContext((_, { headers }) => {
  // Retrieve the token from local storage, session storage, or cookies
  const token = localStorage.getItem('jwt') // Adjust the storage location as needed

  // Return the headers including the Authorization header
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: `${import.meta.env.VITE_APP_API_URL}/graphql`, // Replace with your Strapi GraphQL endpoint,
//     headers: {},
//   }),
//   cache: new InMemoryCache(),
// });
const client = new ApolloClient({
  link: ApolloLink.from([authLink, fileLink]),
  cache: new InMemoryCache(),
})

export default client
