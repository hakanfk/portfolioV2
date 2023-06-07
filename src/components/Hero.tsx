import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Navbar from "./Navbar";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-[100vh] overflow-hidden w-full px-8 justify-center items-center flex-col  flex">
      <Navbar href="" title="" />
      <div className=" px-2 md:px-4 md:gap-x-4 lg:gap-x-12 flex flex-row justify-center items-center">
        <div className="w-[90%] mx-auto md:w-3/5 md:mx-0 mt-10 text-center md:text-start">
          <motion.h2 className="uppercase text-5xl md:text-6xl  ">
            Hi, I am Furkan Hakan
          </motion.h2>
          <h2 className="md:text-4xl text-3xl opacity-80 mt-3">
            Frontend and Mobile Developer
          </h2>
          <p className="mt-3">
            Crafting cool website interfaces and building handy mobile apps, I
            am your go-to developer for all things frontend and mobile -
            bridging the gap between tech and usability, one line of code at a
            time!
          </p>
          <div className="flex justify-center  md:mx-0 w-full flex-row mt-4 md:justify-start items-center gap-x-6">
            <Link
              href="/moiCV.pdf"
              className="w-36 h-10 bg-black rounded-md text-center text-white justify-start pl-4 items-center flex text-lg font-medium hover:bg-neutral-500 transition-all duration-500"
              target="_blank"
              download={true}
            >
              Resume <BsDownload className="w-7 ml-2" />
            </Link>
            <Link
              href="#contact"
              className="w-36 h-10 bg-neutral-200 hover:scale-105 hover:underline transition-all duration-300 rounded-md flex justify-start pl-4 items-center"
            >
              Contact{" "}
              <span>
                <SiMinutemailer className="ml-3" />
              </span>
            </Link>
          </div>
          {/* <div className="flex flex-row gap-x-4 justify-center md:justify-start items-center">
            <hr className="w-32 mt-8" /> <h2 className="mt-8 text-xl">OR</h2>
            <hr className="w-32 mt-8" />
          </div> */}
        </div>

        <div className="hidden  md:flex w-[24rem] md:w-32rem  md:-mt-28  items-center justify-center animate-blob">
          <img src="/moon.png" alt="moon" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
}

export default Hero;

/* 
bg-gradient-to-br from-[#09203F] to-[#537895] bg-clip-text */
