import Image from "next/image";
import React from "react";
import logo from "../assets/logo-192.png";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex justify-between items-center px-5">
        <div className="block">
          <Image
            src={logo}
            className="block"
            alt="hasan logo"
            height={100}
            width={100}
          />
        </div>
        <div className="flex bg-transparent justify-around [&>a]:inline-block [&>a]:px-5 [&>a]:py-3">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
