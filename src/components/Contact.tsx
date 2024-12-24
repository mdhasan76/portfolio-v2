import Image from "next/image";
import React from "react";
import image from "../../public/assets/HasanwithLaptop.jpg";
const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 dark:bg-[#141414]">
      <div className="mx-auto  max-w-screen-2xl">
        <div className="grid md:grid-cols-2 items-center py-16 px-5 ">
          <div className="">
            <h1 className="text-4xl font-bold mb-8 md:mb-0">Get In Touch</h1>
            <div className="hidden md:block h-32 border-l-2 border-black dark:border-gray-200 my-10"></div>
            <div className="grid md:grid-cols-2">
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
          <div className="p-5 hidden md:block">
            <Image
              src={image}
              alt="hasan image with laptop"
              className="w-full h-full rounded-xl max-h-96 max-w-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
