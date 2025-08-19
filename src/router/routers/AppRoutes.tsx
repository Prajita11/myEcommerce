import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginPage from '@/pages/LoginPage'
import PrivateRoute from './PrivateRoute'
import HomePage from '@/pages/Homepage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes
