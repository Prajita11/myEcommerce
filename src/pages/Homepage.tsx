import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Welcome to Our E-commerce Site</h1>
        <p className="mb-6 text-gray-600">
          Discover the latest products and shop with ease. Browse categories, check out trending items, and enjoy a
          smooth shopping experience!
        </p>
        <button className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Shop Now</button>
      </div>
    </div>
  )
}

export default HomePage
