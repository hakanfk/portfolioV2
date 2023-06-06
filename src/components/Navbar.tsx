"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import {
  AiOutlineClose,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

type Props = {
  href: string;
  title: string;
};

const links = ["home", "about", "contact", "projects"];

function CustomLink({ href, title }: Props) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link href={href} className="uppercase group">
      {title}
      <div
        className={`h-[2px] ease-in-out group-hover:w-full ${
          pathname === href ? "w-full" : "w-0"
        } transition-all duration-300 bg-black`}
      />
    </Link>
  );
}

function Navbar({}: Props) {
  const [mobilMenu, setMobilMenu] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 backdrop-blur-md z-50 lg:px-16 px-8 py-4 md:py-6 font-medium">
      <div className="flex flex-row justify-between  ">
        {/* 
          Logo
        */}
        <motion.div
          whileHover={{
            backgroundColor: [
              "hsl(0,0,0)",
              "hsl(0, 100, 50)",
              "hsl(-40, 100, 50)",
              "hsl(-120, 100, 50)",
              "hsl(-150, 100, 50)",
              "hsl(-100, 100, 50)",
              "hsl(-50, 100, 50)",
              "hsl(0, 100, 50)",
            ],
            transition: { duration: 5, repeat: Infinity },
          }}
          whileInView={{}}
          className="flex w-10 h-10
       rounded-full relative justify-center bg-black text-white
        hover:w-60  items-center -mt-2   hover:scale-105  transition-all   duration-100 group cursor-pointer"
        >
          <div className="absolute opacity-50 w-24 group-hover:w-60 group-hover:scale-110 group-hover:translate-y-4 h-24 bg-gradient-to-br from-yellow-400 to-black -z-10 rounded-full blur-lg" />
          <h2 className="group-hover:hidden "> FHK </h2>
          <h2 className="group-hover:flex hidden transition-all duration-500">
            {" "}
            Furkan Hakan Karaaslan{" "}
          </h2>
        </motion.div>
        {/* 
        
          Mobil
        */}

        <div className="flex md:hidden">
          {mobilMenu == false ? (
            <BiMenu
              className="w-12 h-12 z-50"
              onClick={() => setMobilMenu(true)}
            />
          ) : (
            <AiOutlineClose
              className="w-12 h-12 z-50"
              onClick={() => setMobilMenu(false)}
            />
          )}
          {mobilMenu && (
            <div className="fixed inset-0 w-full h-screen z-40 bg-gray-300/80 backdrop-blur-md flex justify-center items-center">
              <div
                className="w-full h-[50%] mx-8 my-8 backdrop-blur-lg rounded-md bg-white flex flex-col justify-around items-center py-4 gap-y-4 "
                onClick={() => setMobilMenu(false)}
              >
                <Link href="#home" className="text-2xl tracking-wide ">
                  Home
                </Link>
                <hr className="w-full h-[2px] bg-gray-200" />
                <Link href="#skills" className="text-2xl tracking-wide ">
                  Skills
                </Link>
                <hr className="w-full h-[2px] bg-gray-200" />
                <Link href="#projects" className="text-2xl tracking-wide ">
                  Projects
                </Link>
                <hr className="w-full h-[2px] bg-gray-200" />
                <Link href="#contact" className="text-2xl tracking-wide ">
                  Contact
                </Link>
                <hr className="w-full h-[2px] bg-gray-200" />
                <div className="flex flex-row gap-x-6 px-2">
                  <AiFillLinkedin size={36} />
                  <AiFillTwitterCircle size={36} />
                  <AiFillGithub size={36} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 
          Links
        */}
        <div className="hidden md:flex flex-row gap-x-6">
          <CustomLink href="#home" title="Home" />
          <CustomLink href="#skills" title="Skills" />
          <CustomLink href="#projects" title="Projects" />
          <CustomLink href="#contact" title="Contact" />
        </div>

        {/* 
          Social Media
        */}
        <div className="hidden md:flex flex-row gap-x-6">
          <AiFillLinkedin
            size={28}
            className="cursor-pointer hover:scale-110 transition-all duration-200"
          />
          <AiFillTwitterCircle
            size={28}
            className="cursor-pointer hover:scale-110 transition-all duration-200"
          />
          <AiFillGithub
            size={28}
            className="cursor-pointer hover:scale-110 transition-all duration-200"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
