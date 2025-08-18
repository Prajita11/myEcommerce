import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">
            🛍️ E-Shop
          </Link>
          <div className="space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/user" className="text-gray-700 hover:text-blue-500">
              User
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-500">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
