/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import mobile from "../assets/portfolioImages/mobile.jpg";
import travel from "../assets/portfolioImages/travel.jpg";
import education from "../assets/portfolioImages/write-8487618_1280.webp";
import erp from "../assets/portfolioImages/erp.png";
import shukranStore from "../assets/portfolioImages/shukran-store.jpg";
import unani from "../assets/portfolioImages/unani.jpg";
import { FaArrowRight } from "react-icons/fa";
const portfolioJsonData = [
  {
    id: 1,
    name: "Quest OS (ERP application)",
    text: "An all in one ERP solution",
    version: [
      {
        type: "App",
        url: "https://play.google.com/store/apps/details?id=com.mindquest.shukran_store",
      },
      { type: "Web", url: "https://shukran-os-v1.web.app/" },
    ],
    img: erp,
    appLink:
      "https://play.google.com/store/apps/details?id=com.mindquest.shukran_store",
    siteLink: "https://shukran-os-v1.web.app/",
  },
  {
    id: 2,
    name: "Shukran Store",
    version: [
      {
        type: "App",
        url: "https://play.google.com/store/apps/details?id=com.mindquest.shukran_store",
      },
    ],
    text: "A Grocery and Rice Selling E-commerce App",
    img: shukranStore,
    appLink:
      "https://play.google.com/store/apps/details?id=com.mindquest.shukran_store",
  },
  {
    id: 5,
    name: "Crazy Travel",
    version: [{ type: "Web", url: "https://crazy-travel.web.app/" }],
    text: "Travel Service selling site",
    img: travel,
    siteLink: "https://crazy-travel.web.app/",
  },
  {
    id: 6,
    name: "Unani Oushudhaloy",
    version: [{ type: "Web", url: "https://unanioushudhaloy.netlify.app/" }],
    text: "Make Invoice Memo by user input",
    img: unani,
    siteLink: "https://unanioushudhaloy.netlify.app/",
  },
  {
    id: 3,
    name: "MobileLy",
    version: [{ url: "https://mobilly76.web.app/", type: "Web" }],
    text: "Second-hand Phone Selling E-commerce site",
    img: mobile,
    siteLink: "https://mobilly76.web.app/",
  },
  {
    id: 4,
    name: "Safe Edu",
    version: [{ type: "Web", url: "https://safe-edu1.web.app/" }],
    text: "Course Selling Site",
    img: education,
    siteLink: "https://safe-edu1.web.app/",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-5 py-16 ">
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
                      <a
                        href={v.url}
                        key={i}
                        className="bg-gray-50 inline-block mr-2 px-5 py-1 rounded-full"
                        target="_blank"
                      >
                        {v.type}
                      </a>
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-1 p-3 py-3 bg-white rounded-full">
                    <div className="">
                      <a
                        href={d.siteLink || d.appLink}
                        target="_blank"
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
