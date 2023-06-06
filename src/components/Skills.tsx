import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import SkillCard from "./SkillCard";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-[100vh] w-full  ">
      <div className="flex h-full pt-20 flex-col justify-center items-center">
        <div className="flex-[1] w-full flex justify-center items-center ">
          <h2 className="text-5xl tracking-widest">My Skills </h2>
        </div>
        <div className="flex-[1] w-full hover:bg-red-400/20 bg-red-400 flex justify-center items-center text-2xl tracking-wide font-base cursor-pointer relative group hover:flex-[4] transition-all duration-300 hover:items-start pt-3 ">
          <h2 className="">Web Design</h2>
          <div className="hidden absolute lg:top-24 top-12 place-items-center gap-x-3 gap-y-4 group-hover:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <SkillCard title="React" color="bg-red-400" />
            <SkillCard title="NextJs" color="bg-red-400" />
            <SkillCard title="TypeScript" color="bg-red-400" />
            <SkillCard title="Redux" color="bg-red-400" />
            <SkillCard title="Tailwind" color="bg-red-400" />
            <SkillCard title="JavaScript" color="bg-red-400" />
          </div>
        </div>
        <div className="flex-[1] w-full hover:bg-emerald-400/20 bg-emerald-400 flex justify-center items-center text-2xl tracking-wide font-base cursor-pointer relative group hover:flex-[4] transition-all duration-300 hover:items-start pt-3 ">
          <h2 className="">Mobile</h2>
          <div className="hidden absolute lg:top-24 top-12 place-items-center gap-x-3 gap-y-4 group-hover:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center">
            <SkillCard title="React Native" color="bg-emerald-400" />
            <SkillCard title="NativeWind" color="bg-emerald-400" />
            <SkillCard title="Redux" color="bg-emerald-400" />
            <SkillCard title="Expo" color="bg-emerald-400" />
            <SkillCard title="Navigation" color="bg-emerald-400" />
          </div>
        </div>
        <div className="flex-[1] w-full hover:bg-yellow-400/20 bg-yellow-400 flex justify-center items-center text-2xl tracking-wide font-base cursor-pointer relative group hover:flex-[4] transition-all duration-300 hover:items-start pt-3 ">
          <h2 className="">Web3</h2>
          <div className="hidden absolute lg:top-24 top-12 place-items-center gap-x-3 gap-y-4 group-hover:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <SkillCard title="Solidity" color="bg-yellow-400" />
            <SkillCard title="Hardhat" color="bg-yellow-400" />
            <SkillCard title="Truffle" color="bg-yellow-400" />
            <SkillCard title="EthersJs" color="bg-yellow-400" />
            <SkillCard title="NFTs" color="bg-yellow-400" />
          </div>
        </div>
        <div className="flex-[1] w-full hover:bg-blue-400/20 bg-blue-400 flex justify-center items-center text-2xl tracking-wide font-base cursor-pointer relative group hover:flex-[4] transition-all duration-300 hover:items-start pt-3 ">
          <h2 className="">Others</h2>
          <div className="hidden absolute lg:top-24 top-12 place-items-center gap-x-3 gap-y-4 group-hover:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <SkillCard title="Git" color="bg-blue-400" />
            <SkillCard title="Github" color="bg-blue-400" />
            <SkillCard title="MySql" color="bg-blue-400" />
            <SkillCard title="Puppeteer" color="bg-blue-400" />
            <SkillCard title="REST APIs" color="bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
