"use client";
import Image from "next/image";
import React from "react";
// import profileImage from "../../public/assets/logo-image-560.png";
import profileImage from "../../public/assets/logo-image-560.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaUpwork, FaWhatsapp } from "react-icons/fa6";
import TypewriterComponent from "typewriter-effect";
const Banner = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="grid lg:grid-cols-2 p-5  max-w-screen-2xl gap-x-5">
        <div className="md:min-w-[600px]">
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
            <div className="text-lg font-medium w-full">
              A{" "}
              <span className="inline-block max-w-full text-[#ff014f]">
                <TypewriterComponent
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Full Stack Developer",
                      "Back-End Developer",
                      "Node.js Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>{" "}
              with over 2 years of experience in building robust web
              applications, APIs, and scalable backend systems.
            </div>
            <p className="text-sm font-thin mt-3">
              Passionate creating great experiences for Web Application
            </p>
          </div>
          <div className="mt-5 [&>button]:py-3 [&>button]:px-3 [&>button]:rounded-xl [&>button]:border-[1px] [&>button]:border-gray-300 [&>button]:inline-block">
            <button className="dark:bg-white dark:text-black bg-black text-white font-thin mr-3">
              Talk with me
            </button>
            <a
              href="#portfolio"
              className="hover:bg-black duration-300 hover:text-white font-medium py-3 px-3 rounded-xl border-[1px] border-gray-300 inline-block dark:hover:bg-white dark:hover:text-black"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
      <div className="fixed right-5 top-1/4 bg-slate-50 dark:bg-[#141414] p-3 rounded-full z-10">
        <ul className="flex flex-col items-center justify-center mt-5 gap-y-5 [&>li>a]:hover:text-4xl">
          <li>
            <a
              href="https://www.linkedin.com/in/md-hasan-miah/"
              className="text-gray-500 dark:hover:text-white dark:text-gray-400 duration-300 hover:text-[#0072b1]"
              target="_blank"
            >
              <FaLinkedin className="text-3xl  hover:scale-105 duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mdhasan76"
              className="text-gray-500 dark:hover:text-white dark:text-gray-400 duration-300 hover:text-black"
              target="_blank"
            >
              <FaGithub className="text-3xl  hover:scale-105 duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~01ea904c428dfc84b9?mp_source=share"
              className="text-gray-500 dark:hover:text-white dark:text-gray-400 duration-300 hover:text-black"
              target="_blank"
            >
              <FaUpwork className="text-3xl  hover:scale-105 duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.peopleperhour.com/freelancer/technology-programming/md-hasan_mia-mern-stack-developer-node-js-zzjqnyzx"
              className="text-gray-500 dark:hover:text-white dark:text-gray-400 duration-300 hover:text-black"
              target="_blank"
            >
              <div className="relative z-10 [&>*]:duration-300 hover:[&>left-eye]:bg-orange-600 [&>span]:hover:bg-orange-600  hover:scale-105 duration-300 bg-white rounded-full">
                <div className="h-6 w-6 hover:border-orange-600  border-black border-2 block rounded-full"></div>
                <span className="left-eye h-1 w-1 rounded-full bg-black top-2 left-1.5 absolute"></span>
                <span className="right-eye h-1 w-1 rounded-full bg-black right-1.5 top-2 absolute"></span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/DeveloperMdHasan"
              className="text-gray-500 dark:hover:text-white dark:text-gray-400 duration-300 hover:text-blue-600"
              target="_blank"
            >
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
            </a>
          </li>
          <li>
            <a
              href="tel:+8801720293476"
              className="text-gray-500 dark:hover:text-white dark:text-gray-400 duration-300 hover:text-[#075E54]"
              target="_blank"
            >
              <FaWhatsapp className="text-3xl hover:scale-105 duration-300" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
