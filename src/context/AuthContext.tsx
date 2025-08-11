import React, { createContext, useContext, useState } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return <AuthContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
