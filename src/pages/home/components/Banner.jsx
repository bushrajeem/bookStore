import { MoveRight } from "lucide-react";
function Banner() {
  return (
    <div className="bg-blue-100 max-w-full h-[760px] px-10">
      <div className="relative">
        <img
          className="absolute right-6 top-0"
          src="./banner/roundsh.png"
          alt=""
        />
        <img className="absolute top-0" src="./banner/squaresh.png" alt="" />

        <div className="ml-[70px]">
          <p className="text-orange-400 mt-[100px] text-[25px]">Upto 30% off</p>
          <h1 className="text-[#012e4a] text-[72px] font-bold leading-20">
            Get Your New Book <br />
            With The Best Price
          </h1>
          <button className="mt-7 flex p-5 items-center gap-5 bg-[#036280] w-[170px] h-[50px] rounded-4xl text-white font-bold">
            Shop Now <MoveRight />{" "}
          </button>
        </div>
        <img
          className="absolute h-[680px] w-[600px] top-[78px] -right-10"
          src="./banner/girl.png"
          alt=""
        />
        <img className="" src="./banner/squaresh.png" alt="" />
      </div>
      <img className="" src="./banner/book.png" alt="" />
    </div>
  );
}

export default Banner;
