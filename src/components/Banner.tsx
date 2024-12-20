import Image from "next/image";
import React from "react";
import profileImage from "../assets/logo-image-560.png";
const Banner = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center border-red-500 border-2">
      <div className="grid grid-cols-2 border-red-400 p-5  max-w-screen-2xl">
        <div>
          <div>
            <Image
              alt="Hasan Image"
              src={profileImage}
              height={100}
              width={100}
            />
          </div>
          <h1 className="text-5xl my-5">Hello! I`m Hasan</h1>
        </div>
        <div>
          <div>
            <p className="text-lg font-medium">
              A Full Stack Developer with 2+ years of professional experience.
            </p>
            <p className="text-sm font-thin mt-3">
              Passionate creating great experiences for Digital Product
            </p>
          </div>
          <div className="mt-5 [&>button]:py-3 [&>button]:px-3 [&>button]:rounded-xl [&>button]:border-[1px] [&>button]:border-gray-300 [&>button]:inline-block">
            <button className="bg-black text-white font-thin mr-3">
              Talk with me
            </button>
            <button className="hover:bg-black duration-300 hover:text-white font-medium">
              See my work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
