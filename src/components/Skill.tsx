import React from "react";
import bootstrap from "../../public/assets/skillImages/Bootstrap_logo.png";
import css from "../../public/assets/skillImages/css3-logo.svg";
import tailwind from "../../public/assets/skillImages/Tailwind_CSS_Logo.png";
import javascript from "../../public/assets/skillImages/JavaScript-logo.png";
import metarialUI from "../../public/assets/skillImages/metarial-ui-logo.png";
import react from "../../public/assets/skillImages/React-logo.png";
import firebase from "../../public/assets/skillImages/firebase-logo.png";
import mongoDB from "../../public/assets/skillImages/mongodDB-logo.png";
import node from "../../public/assets/skillImages/node.js-logo.png";
import html from "../../public/assets/skillImages/html-logo.png";
import express from "../../public/assets/skillImages/express-logo.png";
import postgreSQL from "../../public/assets/skillImages/postgresql-logo.png";
import prisma from "../../public/assets/skillImages/prisma-2.svg";
import typeScript from "../../public/assets/skillImages/typescript.png";
import redis from "../../public/assets/skillImages/redis.png";
import googleCloud from "../../public/assets/skillImages/google-cloud.png";
import graphQL from "../../public/assets/skillImages/graphQL.png";
import aws from "../../public/assets/skillImages/aws.png";
import nextJS from "../../public/assets/skillImages/nextJsLogo.png";
import antDesign from "../../public/assets/skillImages/ant-design.png";
import Image from "next/image";

const frontEnd = [
  {
    img: html,
    name: "HTML5",
  },
  {
    img: css,
    name: "CSS3",
  },
  {
    img: javascript,
    name: "JavaScript",
  },
  {
    img: typeScript,
    name: "Typescript",
  },
  {
    img: react,
    name: "React",
  },
  {
    img: nextJS,
    name: "Next.js",
  },
  {
    img: bootstrap,
    name: "Bootstrap",
  },
  {
    img: tailwind,
    name: "Tailwind",
  },
  {
    img: antDesign,
    name: "Ant Design",
  },
  {
    img: metarialUI,
    name: "Material UI",
  },
];

const backEnd = [
  {
    img: node,
    name: "Node.js",
  },
  {
    img: express,
    name: "Express.js",
  },
  {
    img: mongoDB,
    name: "MongoDB",
  },
  {
    img: firebase,
    name: "Firebase",
  },
  {
    img: postgreSQL,
    name: "PostgreSQL",
  },
  {
    img: redis,
    name: "Redis",
  },
  {
    img: prisma,
    name: "Prisma",
  },
  {
    img: graphQL,
    name: "GraphQL",
  },
  {
    img: googleCloud,
    name: "Google Cloud",
  },
  {
    img: aws,
    name: "AWS",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="my-10 p-5 sm:p-10">
      <h1 className="text-5xl font-bold text-center mb-20">My Skills</h1>
      <div>
        <p className="text-center text-lg font-medium">Front-End Skills</p>
        <div className="flex flex-wrap justify-center my-5">
          {frontEnd.map((data, i) => (
            <div key={i}>
              <div className="bg-white w-28 p-3 mb-2 rounded-md mr-2">
                <span className="">
                  {" "}
                  <Image
                    src={data.img}
                    className="w-full h-16 mx-auto"
                    alt=""
                  />
                </span>
                <p className="pt-2 font-medium text-center">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center text-lg font-medium">Back-End Skills</p>
        <div className="flex flex-wrap justify-center my-5">
          {backEnd.map((data, i) => (
            <div key={i}>
              <div className="bg-white w-28 mb-2 p-3 rounded-md mr-2">
                <span className="">
                  {" "}
                  <Image
                    src={data.img}
                    className="w-full h-16 mx-auto"
                    alt=""
                  />
                </span>
                <p className="pt-2 font-medium text-center">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
