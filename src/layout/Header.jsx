import { Heart, Menu, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
// import { Sheet } from "@/components/ui/sheet"

function TopHeader() {
  return (
    <div className="bg-[#036280] text-white rounded-bl-[70px]">
      <span>+20866660112</span>
      <span>info@example.com</span>
      <span>Sunday - Fri: 9 aM - 6 pM</span>
    </div>
  );
}

function Header() {
  return (
    <div className="max-w-full">
      {/* <TopHeader /> */}
      <div className="flex items-center justify-between">
        <div className="bg-[#012E4A] h-fit w-fit py-6 px-10 rounded-tr-[100px]">
          <img className="" src="./logo/logo.png" alt="" />
        </div>
        <ul className="flex items-center gap-10 text-[18px] font-semibold">
          <li className=" active:text-orange-400 active:border-b-2">
            {" "}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/shop">Shop</NavLink>{" "}
          </li>
          <li>Pages</li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-5 pr-10">
          <NavLink to="/wishlist">
            <Heart />
          </NavLink>
          <NavLink to="/cart">
            <ShoppingCart />
          </NavLink>
          {/* <Sheet></Sheet> */}

          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
