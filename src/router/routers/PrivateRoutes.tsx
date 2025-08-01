import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { Loader } from '@/components/Common/Loader'
import ProfilePage from '@/pages/ProfilePage'

export const privateRoutes: RouteObject[] = [
  {
    path: `/profile`,
    element: (
      <Suspense fallback={<Loader show={true} message="Loading Profile Page" />}>
        <ProfilePage />
      </Suspense>
    ),
  },
]

export default privateRoutes
