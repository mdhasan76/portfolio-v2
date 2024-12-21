/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import mobile from "../assets/portfolioImages/mobile.jpg";
import travel from "../assets/portfolioImages/travel.jpg";
import education from "../assets/portfolioImages/write-8487618_1280.webp";
import erp from "../assets/portfolioImages/erp.png";
import shukranStore from "../assets/portfolioImages/shukran-store.jpg";
import { FaArrowRight } from "react-icons/fa";
const portfolioJsonData = [
  {
    id: 1,
    name: "Quest OS (ERP application)",
    text: "An all in one ERP solution",
    version: ["App", "Web"],
    img: erp,
    appLink:
      "https://play.google.com/store/apps/details?id=com.mindquest.shukran_store",
    siteLink: "https://mobilly76.web.app/",
  },
  {
    id: 2,
    name: "Shukran Store",
    version: ["App"],
    text: "A Grocery and Rice Selling E-commerce App",
    img: shukranStore,
    siteLink: "https://mobilly76.web.app/",
  },
  {
    id: 3,
    name: "MobileLy",
    version: ["Web"],
    text: "Second-hand Phone Selling E-commerce site",
    img: mobile,
    siteLink: "https://mobilly76.web.app/",
  },
  {
    id: 4,
    name: "Safe Edu",
    version: ["Web"],
    text: "Course Selling Site",
    img: education,
    siteLink: "https://safe-edu1.web.app/",
  },
  {
    id: 5,
    name: "Crazy Travel",
    version: ["Web"],
    text: "Travel Service selling site",
    img: travel,
    siteLink: "https://crazy-travel.web.app/",
  },
  {
    id: 6,
    name: "Unani Oushudhaloy",
    version: ["Web"],
    text: "Make Invoice Memo by user input",
    img: education,
    siteLink: "https://unanioushudhaloy.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="p-5 py-16 ">
      <div className=" max-w-screen-2xl mx-auto">
        <h1 className="text-4xl font-bold p-5">Recent Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            portfolioJsonData.map((d: any) => (
              <div key={d.id}>
                <div className="p-5 relative">
                  <Image
                    alt="portfolio image"
                    src={d?.img}
                    className="rounded-xl hover:scale-105 duration-300"
                  />
                  <div className="bg-white px-3 py-2 absolute top-2 right-0 rounded-full ">
                    {d.version.map((v: any, i: number) => (
                      <p
                        key={i}
                        className="bg-gray-50 inline-block mr-2 px-5 py-1 rounded-full"
                      >
                        {v}
                      </p>
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-1 p-3 py-3 bg-white rounded-full">
                    <div className="">
                      <a
                        href={d.siteLink}
                        className="bg-black inline-block p-3 rounded-full text-white hover:scale-125 duration-300"
                      >
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="pl-5 font-medium text-lg -mt-2">{d.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
