// src/router/PrivateRoute.tsx
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = useAuth()

  return user?.isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />
}

export default PrivateRoute
