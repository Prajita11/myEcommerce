import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './router/routers/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'

import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './lib/instance/apollo-client'
import router from './router/routers'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        {isLoggedIn ? (
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
  )
}

export default App
