import { Copyright, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <div className="max-w-fit">
      <div className=" bg-[#012E4A] px-[100px] py-11 h-[450px] relative">
      <div className="grid grid-cols-4 text-white gap-[45px]">
        <div className="col-span-1">
          <img className="" src="./logo/logo.png" alt="" />
          <p className="py-5 text-[17px]">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
            lacinia curabitur lacinia mollis
          </p>
          <div className="flex items-center gap-6 py-7">
            <Facebook /> <Twitter /> <Youtube /> <Linkedin />
          </div>
        </div>
        <div className="col-span-1 ml-4">
          <h1 className="font-bold text-[25px]">
            Costumers <br /> Support
          </h1>
          <div className="flex gap-3 py-5 px-1">
            <div className="h-[2px] w-[25px] bg-red-600"></div>
            <div className="h-[2px] w-[60px] bg-white"></div>
          </div>
          <ul className="list-disc text-[18px] px-5">
            <li>Store List</li>
            <li>Opening Hours</li>
            <li>Contact Us</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-[25px]">Categories</h1>
          <div className="flex gap-3 py-5 px-1">
            <div className="h-[2px] w-[25px] bg-red-600"></div>
            <div className="h-[2px] w-[60px] bg-white"></div>
          </div>
          <ul className="list-disc text-[18px] px-5">
            <li>Novel Books</li>
            <li>Poetry Books</li>
            <li>Political Books</li>
            <li>History Books</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-[25px]">Newsletter</h1>
          <div className="flex gap-3 py-5 px-1">
            <div className="h-[2px] w-[25px] bg-red-600"></div>
            <div className="h-[2px] w-[60px] bg-white"></div>
          </div>
          <p className="py-5 mb-3 text-[17px]">
            Sign up to searing weekly newsletter to get the latest updates.
          </p>
          <input
          className="border-[1px] border-gray-500 p-5 rounded-xl"
          type="text" 
          placeholder="Enter Email Address"/>
        </div>
      </div>
      <img
      className="absolute bottom-10 left-0"
      src="./footer/plane.png" alt="" />
    </div>
    <div className=" bg-[#036280] px-[100px] py-10 relative flex items-center justify-between">
      <p className="flex gap-2 text-white text-[18px]"><Copyright /> All Copyright 2024 by Bookle </p>
      <div className="flex items-center gap-6">
        <img src="./footer/visa.png" alt="" />
        <img src="./footer/mastercard.png" alt="" />
        <img src="./footer/payoneer.png" alt="" />
        <img src="./footer/affirm.png" alt="" />
      </div>
    </div>
    </div>
  );
}

export default Footer;
