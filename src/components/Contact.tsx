import Image from "next/image";
import React from "react";
import image from "../assets/HasanwithLaptop.jpg";
const Contact = () => {
  return (
    <div className="grid grid-cols-2 items-center py-16 px-5 bg-gray-50">
      <div className="">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <div className="h-32 border-l-2 border-black my-10"></div>
        <div className="grid grid-cols-2">
          <div className="text-sm mb-3">
            <p className="font-bold uppercase">website:</p>
            <a
              className="hover:no-underline  duration-300 hover:text-blue-500 font-medium uppercase"
              href="https://mdhasan-portfolio.netlify.app/"
              target="_blank"
            >
              https://mdhasan-portfolio.netlify.app/
            </a>
          </div>
          <div className="text-sm  mb-3">
            <p className="font-bold uppercase">phone number:</p>
            <a
              className="hover:no-underline  duration-300 hover:text-blue-500 font-medium uppercase"
              href="https://mdhasan-portfolio.netlify.app/"
              target="_blank"
            >
              +880 1952532239
            </a>
          </div>
          <div className="text-sm  mb-3">
            <p className="font-bold uppercase">email address:</p>
            <p className="hover:no-underline  duration-300 hover:text-blue-500 font-medium uppercase">
              mdhasanmiah8064@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Image
          src={image}
          alt="hasan image with laptop"
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default Contact;
