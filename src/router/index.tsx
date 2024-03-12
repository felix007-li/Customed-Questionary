import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
      },
    ],
  },
])

export default router
export const HOME_PATHNAME = '/'
// export const MANAGE_INDEX_PATHNAME = '/manage/list'
