import { Heart, Menu, ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='max-w-full'>
      <div className='flex items-center justify-between'>
        <div className='bg-[#012E4A] h-fit w-fit py-6 px-10 rounded-tr-[50px]'>
        <img className='' src="./logo/logo.png" alt="" />
        </div>
        <ul className='flex items-center gap-7 text-[18px] font-semibold'>
           <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/shop">Shop</NavLink> </li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <div className='flex items-center gap-5 pr-10'>
            <Heart />
            <ShoppingCart />
            <Menu />
        </div>
      </div>
    </div>
  )
}

export default Header
