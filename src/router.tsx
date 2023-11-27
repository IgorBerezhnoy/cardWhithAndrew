import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>hello</div>,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}