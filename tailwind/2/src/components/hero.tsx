import React from "react";

export const Hero = () => {
  return (
    <div className="py-2 px-4 flex items-center flex-col w-full">
      <button className="border rounded-full border-gray-200 text-gray-600 bg-gray-100 hover:bg-gray-200 transition cursor-pointer duration-200 text-neutral800 px-4 py-1">
        {" "}
        What are early stages tax reuirements?
      </button>
      <div>
        <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center mt-4 text-neutral-700">
          Automated bookkeeping. Effortless tax filing. Financial&nbsp;clarity.
          Set&nbsp;up&nbsp;in&nbsp;10&nbsp;mins.&nbsp;Back&nbsp;to&nbsp;building&nbsp;by&nbsp;
          7:45am.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button className="bg-[#2579F4] text-white px-4 py-2 rounded-lg font-bold shadow-lg text-shadow-md tracking-wide">
          {" "}
          Start free trial
        </button>
        <button className="px-4 py-2 rounded-lg font-regular text-black cursor-pointer tracking-wide">
          Pricing
        </button>
      </div>
    </div>
  );
};
