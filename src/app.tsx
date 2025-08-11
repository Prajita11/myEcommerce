import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './lib/instance/apollo-client'
import router from './router/routers'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App
