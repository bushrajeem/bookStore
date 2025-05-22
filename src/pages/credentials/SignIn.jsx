import React from "react";
import Layout from "../../layout";

function SignIn() {
  return (
    <Layout>
      <div className="flex justify-center items-center p-10 text-center">
        <div className="w-[400px] h-full shadow-2xl rounded-2xl bg-blue-100 p-5">
          <p className="text-[30px] font-bold text-[#012E4A]">Sign In</p>
          <input
            className="h-fit w-full p-5 mt-3 rounded-2xl border-[1px] border-gray-400"
            type="text"
            placeholder="Email"
          />
          <input
            className="h-fit w-full p-5 mt-3 rounded-2xl border-[1px] border-gray-400"
            type="text"
            placeholder="Name"
          />
          <input
            className="h-fit w-full p-5 mt-3 mb-2 rounded-2xl border-[1px] border-gray-400"
            type="text"
            placeholder="Phone number"
          />
          <p>Do you have a profile?</p>
          <button className="mt-7 h-fit w-full text-center p-5 bg-[#036280] rounded-2xl text-white font-bold hover:bg-orange-400">
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
