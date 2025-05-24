import { useEffect, useState } from "react";
import detailsInfo from "./detailsInfo";

function Details() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setDetail(detailsInfo);
  }, []);

  return (
    <div className="max-w-fit px-[100px] py-[90px]">
      <div className="bg-blue-100 rounded-2xl py-9 px-7 flex flex-wrap gap-7 items-center justify-between">
        {detail.map((item) => (
          <div key={item.name} className=" mb-4 flex gap-7 items-center ">
            <div className="bg-[#036280] rounded-xl w-[85px] h-[90px] flex items-center justify-center">
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <h2 className="font-bold text-[25px]">{item.name}</h2>
              <p className=" text-gray-600 text-[16px]">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
