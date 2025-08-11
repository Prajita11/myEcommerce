import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const LoginForm = () => {
  const [email, setEmail] = useState('login@gmail.com')
  const [password, setPassword] = useState('12345')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === 'login@gmail.com' && password === '12345') {
      setMessage('Login successful ✅')
      navigate('/home')
      auth?.setIsLoggedIn(true)
    } else {
      setMessage('❌ Invalid email or password.')
    }
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md transform rounded-xl bg-white/90 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">Welcome Back</h2>

        {message && (
          <div
            className={`mb-4 rounded px-4 py-2 text-center text-sm font-semibold ${
              message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-4">
          <label className="mb-1 block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="login@gmail.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 font-bold text-white shadow-md hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <span className="cursor-pointer font-medium text-pink-600 hover:underline">Register</span>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
