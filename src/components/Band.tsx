import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

function Band({}: Props) {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden relative h-36 bg-transparent flex justify-center items-center !overflow-hidden bg-red-300 ">
      <Marquee
        gradient={false}
        className=" hover:blur-0 transition-all duration-300 bg-gradient-to-r from-white via-black/40 to-white py-10"
        speed={70}
      >
        <h2 className="mr-32 text-4xl tracking-wide">Frontend </h2>
        <h2 className="mr-32 text-4xl tracking-wide">Mobile </h2>
        <h2 className="mr-32 text-4xl tracking-wide">Solidity</h2>
        <h2 className="mr-32 text-4xl tracking-wide">NextJS </h2>
        <h2 className="mr-32 text-4xl tracking-wide">React </h2>
        <h2 className="mr-32 text-4xl tracking-wide">TypeScript </h2>
      </Marquee>
    </div>
  );
}

export default Band;
