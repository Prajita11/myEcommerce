import { Routes, Route } from 'react-router-dom'

import LoginPage from '@/pages/LoginPage'
import PrivateRoute from './PrivateRoute'
import HomePage from '@/pages/Homepage'
import UserPage from '@/pages/UserPage'
import CartPage from '@/pages/Cartpage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes
