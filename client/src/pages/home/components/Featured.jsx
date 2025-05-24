import axios from "axios";
import { MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Featured() {
  const [book, setBook] = useState();
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=harry+potter")
      .then((response) => setBook(response.data.docs));
  }, []);

  return (
    <div className="px-[100px]">
      <div className="flex items-center justify-between mb-11">
        <p className="text-[40px] font-bold text-[#012E4A] py-3">
          Featured Books
        </p>
        <button className="mt-7 flex p-6 items-center gap-3 h-[60px] border-[1px] border-gray-400 rounded-4xl text-gray-700 font-bold hover:bg-orange-400 hover:text-white hover:border-none">
         <NavLink to="/shop">
         Explore More 
         </NavLink> 
          <MoveRight />{" "}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {book?.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="bg-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-white h-[200px] w-[150px] rounded-2xl"></div>
            <h2 className="text-lg font-semibold mt-4 mb-2">{item.title}</h2>
            <p className="text-gray-600"></p>
            <button className="mt-7 flex p-5 items-center gap-5 bg-orange-400 w-[170px] h-[50px] rounded-4xl text-white font-bold">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
