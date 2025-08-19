import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { Loader } from '@/components/Common/Loader'
import Homepage from '@/pages/Homepage'
import UserPage from '@/pages/UserPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader show={true} message="Loading Homepage" />}>
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
