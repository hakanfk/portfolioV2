"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import image1 from "../../public/NetflixProject.png";
import image2 from "../../public/shopProject.png";
import image3 from "../../public/metaverseProject.png";
import image4 from "../../public/wardrobe-in-app.png";
import image5 from "../../public/in-app.png";
import image6 from "../../public/oldPortfolio.png";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {};

const images = [
  {
    src: image1,
    title: "Netflix-Clone",
    tech: "TypeScript, Redux, Tailwind, Axios,",
    link: "https://github.com/hakanfk/Netflix-CloneV2",
  },
  {
    src: image2,
    title: "Basic Shop Website",
    tech: "TypeScript, Redux, Tailwind, Axios,",
    link: "https://github.com/hakanfk/Basic-Shop-Website",
  },
  {
    src: image3,
    title: "Metaverse Website",
    tech: "TypeScript, Redux, Tailwind, Axios, Framer Motion, ThreeJS",
    link: "https://github.com/hakanfk/Metaverse-Website",
  },
  {
    src: image4,
    title: "Mobile Wardrobe App",
    tech: "Javascript, React-Redux, Css, Axios, Lottie-Animation, React Navigation, Firebase",
    link: "https://github.com/hakanfk/ReactNative-Wardrobe",
  },
  {
    src: image5,
    title: "Mobile Flight App",
    tech: "Javascript, Tailwind, Axios, React-Navigation ",
    link: "https://github.com/hakanfk/Cheap-Flight-App",
  },
  {
    src: image6,
    title: "Old-Portfolio",
    tech: "JavaScript, Tailwind, Framer Motion, Vite ",
    link: "https://github.com/hakanfk/Portfolio",
  },
];

function Projects({}: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState<any>(null);
  const [tech, setTech] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

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
                <Image
                  src={modalImage}
                  alt=""
                  className="w-full object-contain  "
                />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-200 " />
              </div>
              <div className="flex flex-col md:flex-row w-full ">
                <div className="flex flex-col px-2 py-2 justify-start items-start flex-[2] ">
                  <h2 className="text-lg font-semibold tracking-wide mt-1">
                    {" "}
                    {title}{" "}
                  </h2>
                  <p className="text-start text-base opacity/80 mt-1">{tech}</p>
                  <div className="flex flex-row mt-2 gap-x-3 ">
                    <div className="p-1 justify-start items-center flex flex-row group relative cursor-pointer rounded-md border-emerald-400 border-[3px] ">
                      <div className="absolute group-hover:w-full cursor-pointer ease-in-out  w-0 bg-emerald-400 transition-all duration-300 h-full top-0 left-0" />
                      <Link
                        className="text-gray-700 group-hover:text-white font-semibold z-10 relative"
                        href={link}
                        target="_blank"
                      >
                        Live Demo
                      </Link>
                      <BiLinkExternal className="text-gray-700 group-hover:text-white z-10 ml-2 h-8" />
                    </div>
                    <div className="p-1 cursor-pointer px-4 justify-start items-center flex flex-row group relative hover:border- rounded-md border-black border-[3px] ">
                      <div className="absolute group-hover:w-full cursor-pointer ease-in-out  w-0 bg-black transition-all duration-300 h-full top-0 left-0" />
                      <Link
                        className="text-black font-semibold group-hover:text-white z-10 relative"
                        href={link}
                        target="_blank"
                      >
                        Code
                      </Link>
                      <BsGithub className="text-black group-hover:text-white z-10 ml-2 h-8" />
                    </div>
                  </div>
                </div>
                {/*  <div className="flex-[1] px-2  py-2 w-full justify-start flex md:justify-end ">
                  <h2>Tech Stack:</h2>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="md:grid-cols-3 transition-all duration-300 group grid gap-x-2 grid-cols-2  h-full py-0 md:py-6">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h2 className="md:mb-1 -mb-14 font-semibold text-base md:text-lg text-center">
                {" "}
                {item.title}{" "}
              </h2>
              <Image
                onClick={() => {
                  setModalImage(item.src);
                  setTech(item.tech);
                  setLink(item.link);
                  setTitle(item.title);
                  setOpenModal(true);
                }}
                alt=""
                src={item.src}
                className="w-96 h-48 object-contain group-hover:scale-95 hover:!z-10 hover:!scale-105 cursor-pointer transition-all duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
