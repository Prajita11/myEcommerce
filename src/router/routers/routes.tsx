import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import Homepage from '@/pages/Homepage'
import { Spin } from 'antd'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Spin tip="Loading" size="large"/>}>
        <Homepage />
      </Suspense>
    ),
  },
  // {
  //   path: '/user',
  //   element: (
  //     <Suspense fallback={<Loader show={true} message="Loading User Page" />}>
  //       <UserPage />
  //     </Suspense>
  //   ),
  // },
]

export default routes
