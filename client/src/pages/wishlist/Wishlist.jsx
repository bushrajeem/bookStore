import React from "react";
import Layout from "../../layout";
import BreadCrumb from "../../shared/BreadCrumb";

function Wishlist() {
  return (
    <Layout>
     <BreadCrumb text="Wishlist" page="Wishlist" navlink="/wishlist"/>
      <div className="px-[100px] py-[80px] ">
        <div className="flex justify-between py-5">
          <p className="text-[25px] font-semibold text-[#012e4a]">Product</p>
          <div className="flex gap-[80px]">
            <p className="text-[25px] font-semibold text-[#012e4a]">Price</p>
            <p className="text-[25px] font-semibold text-[#012e4a]">Stock</p>
            <p className="text-[25px] font-semibold text-[#012e4a]">Subtotal</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
    </Layout>
  );
}

export default Wishlist;
