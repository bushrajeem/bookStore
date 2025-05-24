import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

function BreadCrumb({ text, page, navlink }) {
  return (
    <div className="relative bg-blue-100 h-[470px] px-[600px] py-[180px]">
      <img className=" absolute left-0 bottom-0" src="./all/book.png" alt="" />
      <p className="text-[#012e4a] text-[40px] font-bold">{text}</p>
      <div className="flex items-center">
        <NavLink to="/">Home</NavLink>
        <ChevronRight />
        <NavLink to={`${navlink}`}>{page}</NavLink>
      </div>
      <img
        className=" absolute right-0 bottom-0"
        src="./all/book2.png"
        alt=""
      />
    </div>
  );
}

export default BreadCrumb;
