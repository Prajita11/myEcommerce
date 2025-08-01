import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { authRoutes, publicRoutes } from '@/router/routers'
import PageNotFound from '@/pages/NotFound'

const errorRoute: RouteObject = {
  path: '*',
  element: <PageNotFound />,
}
const allRoutes = [
  ...publicRoutes,
  ...authRoutes,
  // ...privateRoutes,
  errorRoute,
]

export default createBrowserRouter(allRoutes)
