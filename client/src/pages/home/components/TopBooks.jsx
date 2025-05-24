import React, { useEffect, useState } from "react";
import topbookinfo from "./topbookinfo";

function TopBooks() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(topbookinfo);
  }, []);

  return (
    <div className="px-[100px] py-20 bg-blue-100 mt-[90px]">
      <h1 className="text-[40px] text-center font-bold text-[#012E4A]">
        Top Categories Book
      </h1>
      <div className="border-[2px] border-[#012E4A] rounded-2xl flex items-center justify-between flex-wrap p-7 text-center">
        {details?.map((item, i) => (
          <div key={i} className="">
            <div className="relative bg-white h-[260px] w-[260px] rounded-full p-[10px]">
              <div className="border-[1px] h-[240px] w-[240px] rounded-full border-dashed border-[#012E4A] flex items-center justify-center">
                <div className="absolute h-[40px] w-[40px] bg-[#012E4A] top-[15px] right-14 rounded-full text-white p-2">
                  0{item.rating}
                </div>
                <img
                  className="h-[145px] w-[110px]"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </div>
            <p className="text-[#012E4A] text-[20px] font-bold mt-7">
              {item.category} ({item.quantity})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBooks;
