import { useEffect, useState } from 'react'
import { Card } from 'antd'
import { products } from '@/data/Product'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartPage() {
  const [cart, setCart] = useState<(typeof products)[0][]>([])

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart') || '[]')
    setCart(storedCart)
  }, [])

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-gray-100 p-6">
      <h2 className="items-center text-center text-2xl font-bold text-gray-800">
        {/* <FontAwesomeIcon icon={faCartShopping} /> */}
        MY CART
      </h2>

      <div className="flex flex-wrap gap-5">
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty!</p>
        ) : (
          cart.map((item, index) => (
            <Card key={index} title={item.title} size="small" className="h-auto w-1/6 bg-teal-50 shadow-md">
              <img src={item.image} alt={item.title} className="h-32 w-full rounded object-cover" />
              <p className="mt-2 text-gray-700">{item.description}</p>

              <div className="mt-2 flex justify-between gap-2 text-sm font-semibold">
                <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">Remove</button>
                <button className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600">Make Payment</button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
