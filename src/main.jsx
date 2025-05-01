import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { Home } from './pages/home/home.jsx'
import { RouterProvider } from 'react-router-dom'
import { Shop } from './pages/shop/shop.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/shop", element: <Shop />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
