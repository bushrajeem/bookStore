import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { Home } from './pages/home/home.jsx'
import { RouterProvider } from 'react-router-dom'
import { Shop } from './pages/shop/shop.jsx'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/wishlist/Wishlist'
import SignIn from './pages/credentials/SignIn'
import Blog from './pages/blog/Blog'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/shop", element: <Shop />},
  {path: "/cart", element: <Cart />},
  {path: "/wishlist", element: <Wishlist />},
  {path: "/signIn", element: <SignIn />},
  {path: "/blog", element: <Blog />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
