import React from 'react'
import { Card } from 'antd'
import { products } from '@/data/Product'
const HomePage: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false)

  const handleAddToCart = () => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }
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
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {products.map((products) => (
          <Card key={products.id} title={products.title} size="small" className="h-auto w-1/6 bg-teal-50">
            <img src={products.image} alt={products.title} className="h-32 w-full rounded object-cover" />
            <p>{products.description}</p>
            <div className="mt-2 flex gap-2">
              {showMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="rounded bg-green-500 px-6 py-3 font-semibold text-white shadow-lg">
                    ✅ Added to cart successfully!
                  </div>
                </div>
              )}
              <button onClick={() => handleAddToCart()} className="rounded bg-blue-500 px-2 py-1 text-white">
                Add to Cart
              </button>
              <button className="rounded bg-blue-500 px-2 py-1 pr-2 text-white">Buy Now</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomePage
