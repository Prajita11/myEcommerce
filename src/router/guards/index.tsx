import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const savedUser = localStorage.getItem('user')
  return savedUser ? children : <Navigate to="/login" />
}

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const savedUser = localStorage.getItem('user')
  return savedUser ? <Navigate to="/" /> : children
}

export { AuthRoute, PrivateRoute }
