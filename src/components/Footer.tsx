import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-gray-100 py-6 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
    </footer>
  )
}

export default Footer
