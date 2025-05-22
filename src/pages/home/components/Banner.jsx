import { MoveRight } from "lucide-react";

function Banner() {
  return (
    <div className="bg-blue-100 max-w-full h-[760px] px-10 overflow-hidden">
      <div className="relative pt-[150px]">
        <img
          className="absolute top-0 left-[400px]"
          src="./banner/squaresh.png"
          alt=""
        />
        <img
          className="absolute right-4 top-0"
          src="./banner/roundsh.png"
          alt=""
        />

        <div className="ml-[70px] mt-11">
          <p className="text-orange-400 text-[25px]">Upto 30% off</p>
          <h1 className="text-[#012e4a] text-[72px] font-bold leading-20">
            Get Your New Book <br />
            With The Best Price
          </h1>
          <button className="mt-7 flex p-6 items-center gap-3 bg-[#036280] h-[60px] rounded-4xl text-white font-bold hover:bg-orange-400">
            Shop Now <MoveRight />{" "}
          </button>
        </div>
        <img
          className="absolute h-[680px] w-[600px] top-[78px] -right-14"
          src="./banner/girl.png"
          alt=""
        />
        <img
          className="absolute left-[40%] -bottom-[270px]"
          src="./banner/squaresh.png"
          alt=""
        />
        <img
          className="absolute -bottom-[290px] -left-11"
          src="./banner/book.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
