import React from "react";
import MapChart from "./Map";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-[100vh] w-full relative flex flex-row justify-center items-center">
      <div className="flex-[1]  md:px-0 flex flex-col gap-y-6 justify-center items-center">
        <h2 className="text-3xl">Contact Us</h2>
        <div className=" flex flex-col gap-y-4 justify-center items-start">
          <input
            type="text"
            className="lg:bg-gray-200 bg-gray-50 relative transition-all duration-200 appearance-none focus:outline-none pl-2 pr-32  md:pr-48 py-2 rounded-md focus:bg-white focus:border-2 focus:border-black/70"
            placeholder="Name"
          />
          <input
            type="text"
            className="lg:bg-gray-200 bg-gray-50 relative transition-all duration-200 appearance-none focus:outline-none pl-2  pr-32 md:pr-48 py-2 rounded-md focus:bg-white focus:border-2 focus:border-black/70"
            placeholder="Mail"
            required
          />
          <textarea
            className="lg:bg-gray-200 bg-gray-50 relative transition-all duration-200 appearance-none focus:outline-none pl-2 pr-32  md:pr-[12rem] py-2 rounded-md focus:bg-white focus:border-2 focus:border-black/70"
            placeholder="Message"
            rows={5}
          />
        </div>
        <button className="py-2 px-24 hover:bg-emerald-300 transition-all duration-300 bg-emerald-400 rounded-md">
          Send
        </button>
      </div>
      <div className="lg:flex-[1] lg:flex hidden ">
        <MapChart />
      </div>
      <div className="lg:hidden absolute top-0 opacity-10 -z-10  ">
        <MapChart />
      </div>
    </div>
  );
}

export default ContactMe;
