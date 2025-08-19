import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './router/routers/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import { AuthProvider, useAuth } from './context/AuthContext'

export const App = () => {
  const auth = useAuth()
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
