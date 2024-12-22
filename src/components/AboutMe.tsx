import Image from "next/image";
import React from "react";
import profileImage from "../assets/alwaysProf-187kb.jpg";
const AboutMe = () => {
  return (
    <div id="about" className=" bg-gray-50 ">
      <div className=" max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 p-5 bg-gray-50 py-16  ">
          <div className="p-5  mx-auto">
            <Image
              alt="Md Hasan Mia"
              src={profileImage}
              className=" rounded-xl"
            />
            <div className="mt-5">
              <h3 className="font-medium text-xl">Md Hasan Mia</h3>
              <p className="font-thin text-xs text-gray-500 mt-1">
                Full Stack Developer
              </p>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mb-2 text-justify pt-5 text-[18px] text-gray-600 leading-7">
              <span className="">
                I am Md Hasan Mia, a dedicated and professional Full-Stack
                Developer with <b>2+ years</b> of experience specializing in
                backend development using MongoDB, Node.js, and the MERN stack.
                I have a strong focus on ERP and E-Commerce solutions, creating
                efficient, scalable, and user-friendly applications tailored to
                business needs.
              </span>
              <span className="my-1 block">
                On the front end, I excel at building seamless and responsive
                interfaces using React.js, while on the back end, I ensure
                robust and well-architected systems. I am continuously expanding
                my knowledge in web development through self-learning and
                practical projects.
              </span>
              <span className="block mb-1">
                My ultimate goal is to become a highly skilled full-stack
                developer capable of building intuitive user interfaces and
                managing complex back-end systems with efficiency. I am also
                exploring new technologies like Go (Golang) And System Design to
                further enhance my expertise and stay ahead in the field.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
