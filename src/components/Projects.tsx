"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import image1 from "../../public/discord.png";
import image2 from "../../public/discord2.png";
import image3 from "../../public/google.png";
import image4 from "../../public/netflix.png";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {};

const images = [image1, image2, image3, image4, image2, image4];

function Projects({}: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState<any>(null);

  useEffect(() => {}, []);

  return (
    <div className="h-[100vh] flex flex-col relative justify-center  items-center px-6 py-16 mt-16">
      <h2 className="uppercase mt-12 text-5xl tracking-widest">
        Featured Projects
      </h2>
      <h2 className="font-light tracking-widest py-3">
        Hover and Click on Projects to See More
      </h2>

      {openModal && (
        <div className="fixed flex justify-center items-center text-center inset-0 backdrop-blur-md z-50 bg-gray-600/20 w-[100vw] h-[100vh]">
          <div className="flex justify-center items-center w-[90%] md:w-2/3 h-screen ">
            <div className="flex-col relative flex justify-center items-start pb-2 w-[48rem] rounded-md bg-gray-200">
              <h2
                className="cursor-pointer absolute -top-12 right-2"
                onClick={() => setOpenModal(false)}
              >
                <AiFillCloseCircle className="w-10 h-10 hover:scale-105 transition-all duration-300" />
              </h2>
              <div className="relative">
                <Image src={modalImage} alt="" className="w-full " />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-200 " />
              </div>
              <div className="flex flex-col md:flex-row w-full ">
                <div className="flex flex-col px-2 py-2 justify-start items-start flex-[2] ">
                  <h2 className="text-lg tracking-wide mt-1">Netflix-Clone</h2>
                  <p className="text-start text-sm opacity/80 mt-1">
                    {" "}
                    Netflix Clone developed with React, TypeScript, React-Redux,
                    TailwindCss and NextJs. For now it is just a frontend
                    version. Full-Stack version will be released soon{" "}
                  </p>
                  <div className="flex flex-row mt-2 gap-x-3 ">
                    <div className="p-1 justify-start items-center flex flex-row group relative cursor-pointer rounded-md border-emerald-400 border-[3px] ">
                      <div className="absolute group-hover:w-full cursor-pointer ease-in-out  w-0 bg-emerald-400 transition-all duration-300 h-full top-0 left-0" />
                      <Link
                        className="text-gray-700 group-hover:text-white font-semibold z-10 relative"
                        href=""
                      >
                        Live Demo
                      </Link>
                      <BiLinkExternal className="text-gray-700 group-hover:text-white z-10 ml-2 h-8" />
                    </div>
                    <div className="p-1 cursor-pointer px-4 justify-start items-center flex flex-row group relative hover:border- rounded-md border-black border-[3px] ">
                      <div className="absolute group-hover:w-full cursor-pointer ease-in-out  w-0 bg-black transition-all duration-300 h-full top-0 left-0" />
                      <Link
                        className="text-black font-semibold group-hover:text-white z-10 relative"
                        href=""
                      >
                        Code
                      </Link>
                      <BsGithub className="text-black group-hover:text-white z-10 ml-2 h-8" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1] px-2  py-2 w-full justify-start flex md:justify-end ">
                  <h2>Tech Stack:</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="md:grid-cols-3 transition-all duration-300 group grid gap-x-2 grid-cols-2  h-full py-6">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h2 className="mb-1 font-semibold text-lg">Netflix-Clone</h2>
              <Image
                onClick={() => {
                  setModalImage(item);
                  setOpenModal(true);
                }}
                alt=""
                src={item}
                className="w-96 group-hover:scale-95 hover:!z-10 hover:!scale-105 cursor-pointer transition-all duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
