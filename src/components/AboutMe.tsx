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
            <p className="pt-5 text-[18px] text-justify text-gray-600 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dolore obcaecati vitae fuga repudiandae consequuntur deleniti?
              Odit ut veniam sequi rem tempora mollitia quia fugit officiis
              deleniti, nobis accusantium vel debitis optio quo atque ab est
              repudiandae suscipit, corporis incidunt facilis harum delectus
              dolorum. At, excepturi aliquid dolores illum quibusdam ad dolorem
              incidunt sit. Nulla quia iusto quae, eaque ullam quidem? Veniam in
              odit dolorem assumenda asperiores accusantium dolor explicabo
              soluta tenetur aliquam mollitia quis sed eaque repellat officiis
              iure iste, obcaecati possimus ea quae illo minus cum aut? Quam
              ipsum voluptatum at maxime, obcaecati fuga dolorum natus similique
              amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
