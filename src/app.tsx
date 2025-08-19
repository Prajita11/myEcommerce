<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './router/routers/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import { AuthProvider, useAuth } from './context/AuthContext'

const App: React.FC = () => {
  const auth = useAuth()

=======
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './lib/instance/apollo-client'
import router from './router/routers'

export const App = () => {
>>>>>>> 2ee677fb6c61056688e991ec94e419358fec66b4
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen flex-col">
          {!auth?.isLoggedIn ? (
            <>
              <Navbar />
              <main className="flex-grow">
                <AppRoutes />
              </main>
              <Footer />
            </>
          ) : (
            <LoginPage />
          )}
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
