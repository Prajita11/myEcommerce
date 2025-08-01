import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { Loader } from '@/components/Common/Loader'
import Homepage from '@/pages/Homepage'
import ContactPage from '@/pages/ContactPage'
import AboutPage from '@/pages/AboutPage'

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader show={true} message="Loading Homepage" />}>
        <Homepage />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<Loader show={true} message="Loading Contact Page" />}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<Loader show={true} message="Loading About Page" />}>
        <AboutPage />
      </Suspense>
    ),
  },
]

export default publicRoutes
