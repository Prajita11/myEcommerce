import { APP_NAME } from './lib/config'
import { ApolloProvider } from '@apollo/client'
import client from './lib/instance/apollo-client'
import router from './router'
import { RouterProvider } from 'react-router-dom'

export const App = () => {
  document.title = APP_NAME || `###`

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App
