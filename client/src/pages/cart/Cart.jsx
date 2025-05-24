import { NavLink } from "react-router";
import Layout from "../../layout";
import BreadCrumb from "../../shared/BreadCrumb";

function Cart() {
  return (
    <Layout>
      <BreadCrumb text="Cart" page="cart" navlink="/cart" />
      <div className="grid grid-cols-12 px-[100px] py-10">
        <div className="col-span-9 mr-12">
          <p className="text-[25px] font-semibold text-[#012e4a]">Product</p>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="py-8 flex items-center justify-between">
            <div className="flex items-center gap-3 ">
              <input
                className="border-[1px] border-gray-300 p-5 rounded-sm w-[350px]"
                type="text"
                placeholder="Coupon Code"
              />
              <button className="bg-[#036280] p-5 rounded-[6px] w-[100px] text-white text-center font-bold hover:bg-amber-500">
                Apply
              </button>
            </div>
            <button className="text-center p-5 w-[150px] gap-5 bg-orange-400 rounded-xl text-white font-bold">
              Update Cart
            </button>
          </div>
        </div>
        <div className="col-span-3 border-[1px] border-gray-300 rounded-xl p-6">
          <p className="text-[20px] font-semibold py-3">Cart Total</p>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="py-5">Subtotal: </p>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="py-5">Shipping: </p>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="py-5">Total: </p>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <button className="mt-7 text-center p-7 bg-[#036280] rounded-full text-white font-bold hover:bg-orange-400">
            <NavLink to="/signIn">Procced To Checkout</NavLink>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
